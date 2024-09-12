import React from 'react'
import { FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 bg-[#24262b] '>
      <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
        <div>
          <h1 className='w-full text-3xl font-bold text-white'>
            Horizon Games
          </h1>
          <p>
            Explore the gaming world with us!
          </p>
          <div className='flex justify-between md:w-[35%] my-6'>
            <FaFacebookSquare size={30} />
            <FaGithubSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
          </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>
              Popular Games
            </h6>
            <ul>
              <li className='py-2 text-sm'>
                Fortnite
              </li>
              <li className='py-2 text-sm'>
                Call of Duty
              </li>
              <li className='py-2 text-sm'>
                League of Legends
              </li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>
              Gaming Communities
            </h6>
            <ul>
              <li className='py-2 text-sm'>
                eSports
              </li>
              <li className='py-2 text-sm'>
                RPG Enthusiasts
              </li>
              <li className='py-2 text-sm'>
                Streamers
              </li>
            </ul>
          </div>
          <div>
            <h6 className='font-medium text-[#9b9b9b]'>
              Game Reviews
            </h6>
            <ul>
              <li className='py-2 text-sm'>
                Latest Game Releases
              </li>
              <li className='py-2 text-sm'>
                Game Ratings
              </li>
              <li className='py-2 text-sm'>
                Player Insights
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div  >
        <h1 className='flex text-white justify-center'>
        © 2023 Horizon Games. All rights reserved.
        </h1>
      </div>
    </div>
  )
}

export default Footer
