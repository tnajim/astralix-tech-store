import imageUrlBuilder from '@sanity/image-url';
import { createClient } from 'next-sanity';


// sanity client connection
export const client = createClient({
    projectId: 'cu9xfwto',
    dataset: 'production',
    apiVersion: '2023-09-22',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

// image builder to style images
const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);