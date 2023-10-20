import Stripe from "stripe";
import { client } from "@/lib/client";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function getProductPrice(productid) {
    const query = `*[_type == "product" && _id == '${productid}']`;
    const foundProduct = await client.fetch(query);
    return foundProduct[0].price;
}

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const prices = await Promise.all(
                req.body.map(async (item) => {
                    const price = await getProductPrice(item._id);
                    return price * 100;
                })
            );

            const line_items = req.body.map((item, index) => {
                const img = item.image[0].asset._ref;
                const newImage = img
                    .replace('image-', 'https://cdn.sanity.io/images/cu9xfwto/production/')
                    .replace('-webp', '.webp');

                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: item.name,
                            images: [newImage],
                        },
                        unit_amount: prices[index], // Use the fetched price
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: item.quantity,
                };
            });

            const params = {
                submit_type: 'pay',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1NzXYBBBNPOg21EOMK4GNsPq' },
                    { shipping_rate: 'shr_1NzxLhBBNPOg21EOZnWYIY2H' },
                ],
                line_items: line_items, // Use the constructed line_items object
                mode: 'payment',
                success_url: `${req.headers.origin}/success`,
                cancel_url: `${req.headers.origin}/`,
            };
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session);
        } catch (err) {
            res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
}