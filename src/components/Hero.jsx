import React from 'react'
import {logo_bgremove } from "../assets";

const Hero = () => {
  const handleExploreKamalogue = () => {
    window.location.href = 'https://hrishikesh-kamalogue.vercel.app/';
  };

  return (
    <header className='w-full flex justify-center items-center flex-col'> 
         <nav className='flex justify-between items-center w-full mb-10 pt-3'>
         <a href='https://hrishikesh-kamalogue.vercel.app/'>
  <img src={logo_bgremove} alt='sumz_logo' className='object-contain' height='400' width='400' />
</a>


        {/* <button
          type='button'
          onClick={handleExploreKamalogue}
          className='black_btn'
        >
       Explore Kamalogue
        </button> */}
      </nav>  

      <h1 className='head_text'>
      Discover the Future of Blog Summarization with <br className='max-md:hidden' />
        <span className='orange_gradient '> Kamalogue</span>
      </h1> 
      <h2 className='desc'>
      "Big news! Kamalogue just got even better with our latest AI-powered feature - blog summarization! Say goodbye to lengthy blog posts and hello to quick, easy-to-read summaries that capture the essence of any topic. Try our latest feature today and experience the power of AI in content creation. Your time is valuable - let Kamalogue help you make the most of it!"
      </h2>
    </header> 

  

    




  )
}

export default Hero
