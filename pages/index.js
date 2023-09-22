import React from 'react'

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>

      <FooterBanner />
    </>
  )
}

// sanity client connection
const client = createClient({
  projectId: 'cu9xfwto',
  dataset: 'production',
  apiVersion: '2023-09-22',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

export const getServerSideProps = async () => {
  const products = await client.fetch(`*[_type == "product"]`);
  const bannerData = await client.fetch(`*[_type == "banner"]`);

  return {
    props: { products, bannerData }
  }
}

// image builder to style images
const builder = imageUrlBuilder(client)

function urlFor(source) {
    return builder.image(source)
}

export default Home;