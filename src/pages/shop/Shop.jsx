import React from 'react'
import Hero from '../../components/Hero/Hero'
import Popular from '../../components/popular/Popular'
import Offers from '../../components/Offers/Offers'
import NewCollections from '../../components/NewCollections/NewCollections'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'

const Shop = () => {
  return (
    <div className='bb'>
      <Hero/>
      <Popular/> 
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default Shop