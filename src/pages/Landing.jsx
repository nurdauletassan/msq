import React from 'react'
import ShopButton from '../components/Landing/ShopButton'
import './Landing.css'
import man from '../images/landingImage.png'

function Landing() {
  return (
    <div className='landing-main'>
      <div className='landing-title'>
      <h2 className="text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
      <p class="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
      <ShopButton/>
      <div className='number-info'>
        <div class="flex flex-col">
            <span class="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
            <span>200</span>+</span>
            <span class="text-xs xl:text-base text-black/60 text-nowrap">International Brands</span>
        </div>
        <div className='vertical-line'></div>
        <div class="flex flex-col ml-6 md:ml-0">
            <span class="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
            <span>2,000</span>+</span>
            <span class="text-xs xl:text-base text-black/60 text-nowrap">High-Quality Products</span>
        </div>
        <div className='vertical-line'></div>
        <div class="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
            <span class="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
            <span>3,000</span>+</span>
            <span class="text-xs xl:text-base text-black/60 text-nowrap">Happy Customers</span>
        </div>
      </div>
      </div>
      
      <div className='landing-image'> 
        <img src={man} alt="" />

      </div>
      <div>

      </div>
    </div>
  )
}

export default Landing