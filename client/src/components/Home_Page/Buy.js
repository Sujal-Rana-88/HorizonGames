import React from 'react'

function Buy() {
  return (
    <div>
      <div className='w-full bg-white py-16 px-4 '>
        <h3 className='text-black font-bold text-2xl text-center'>
          Buy Now
        </h3>
        <div className='w-full max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0'>
          <img
            className='w-full md:w-[550px] mx-auto my-4'
            src="https://cyberpost.co/wp-content/uploads/2022/07/photo_2022-07-26_07-45-54.jpg"
            alt="Gaming Image"
          />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00fd9a] font-bold text-center md:text-left'>Feel the Pulse of Gaming</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-center md:text-left py-4'>Endless Thrills Await</h1>
            <p className='text-center md:text-left'>
              Celebrate the artistry of games and the camaraderie of gamers as we embark on a journey through virtual worlds. Join our community of passionate players and explore the immersive realms of gaming, where every challenge is an opportunity, and every victory is a triumph. Whether you're a seasoned pro or just starting your adventure, there's always a place for you here. Welcome to a world where fun knows no bounds!
            </p>
            <button className='bg-black text-[#00fd9a] w-full md:w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 '>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Buy
