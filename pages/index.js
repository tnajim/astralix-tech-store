import React from 'react'

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {console.log(bannerData)}

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

export const getServerSideProps = async () => {
  const products = await client.fetch(`*[_type == "product"]`);
  const bannerData = await client.fetch(`*[_type == "banner"]`);

  return {
    props: { products, bannerData }
  }
}

export default Home;