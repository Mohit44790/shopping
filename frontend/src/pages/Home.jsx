import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeatureCollections from '../components/Products/FeatureCollections'
import FeaturesSection from '../components/Products/FeaturesSection'
import Sponsorship from '../components/Products/Sponsorship'

const placholderProducts =[
  {
    _id:6,
    name:"Product 6",
    price:112,
    images:[{url:"https://cdn.pixabay.com/photo/2015/10/26/06/51/designer-saree-1006688_640.jpg"}]
},
{
    _id:7,
    name:"Product 7",
    price:112,
    images:[{url:"https://cdn.pixabay.com/photo/2015/04/13/15/30/saree-720716_640.jpg"}]
},
{
    _id:8,
    name:"Product 8",
    price:112,
    images:[{url:"https://cdn.pixabay.com/photo/2015/10/26/06/51/designer-saree-1006688_640.jpg"}]
},
]

const Home = () => {
  return (
    <div>
        <Hero/>
        <GenderCollectionSection/>
        <NewArrivals/>
       
        <h2 className="text-2xl text-center font-medium mb04">Best Seller</h2>
     
        <ProductDetails/>
        <div className='container mx-auto'>
          <h2 className='text-3xl text-center font-bold'>Top Wears for Women</h2>
          <ProductGrid products={placholderProducts}/>
        </div>
        <FeatureCollections/>
        <FeaturesSection/>
        <Sponsorship/>
    </div>
  )
}

export default Home