import React from 'react'
import { vector } from "../assets";

const Hero = () => {
  const handleExploreKamalogue = () => {
    window.location.href = 'https://hrishikesh-kamalogue.vercel.app/';
  };

  return (
    <header className='w-full flex justify-center items-center flex-col'> 
         <nav className='flex justify-between items-center w-full mb-10 pt-3'> 
         <div className="border-b w-full inline-block border-blue-400 py-8">

         <a href="/https://hrishikesh-kamalogue.vercel.app/">
          <div class="flex items-start h-20 mb-[-30px]">
            <img src= { vector } alt="sumz_logo" class="object-contain max-w-full sm:h-20 sm:w-20 h-14 w-14 mr-1 sm:mr-4" />
            <span class="blue_gradient pt-5s font-bold text-4xl sm:text-6xl leading-tight" style={{ lineHeight: "1.2" }}> Kamalogue </span>
          </div>


          </a>    
          </div>


        {/* <button
          type='button'
          onClick={handleExploreKamalogue}
          className='black_btn'
        >
       Explore Kamalogue
        </button> */}
      </nav>   

      <div className="text-center sm:mt-[-10px] mb-8 p-8 mt-5 relative rounded-lg bg-blue-500 bg-opacity-10">
        <p className="text-lg font-semibold text-gray-700 mb-4">Discover more exciting content on our blog page! From technology to entertainment, we've got you covered. Browse through our collection of insightful articles and expand your knowledge today. Don't miss out, click the button below to explore now!</p>
          <a href="http://hrishikesh-kamalogue.vercel.app/">
            <button  className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-600 hover:bg-blue-700 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
           Explore now!
            </button>
          </a>
         </div>

      <h1 className='head_text l' >
      Discover the Future of Blog Summarization with <br className='max-md:hidden' />
        <span className='orange_gradient '> Kamalogue</span>
      </h1> 
      <h2 className='desc text-4xl'>
      "Big news! Kamalogue now just got even better with our latest AI-powered feature - blog summarization! Say goodbye to lengthy blog posts and hello to quick, easy-to-read summaries that capture the essence of any topic of any blog on the internet. Try our latest feature today and experience the power of AI in content creation. Your time is valuable - let Kamalogue help you make the most of it!"
      </h2>
    </header>  

    
  

    




  )
}

export default Hero
