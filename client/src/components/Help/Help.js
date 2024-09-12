import React from 'react';

function Help() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-black font-bold text-2xl text-center'>
        Help Center
      </h3>
      <div className='w-full max-w-[1240px] mx-auto px-4'>
        <h4 className='text-lg font-semibold mt-8 mb-4'>Renting Games</h4>
        <p className='mb-4'>Here at Horizon Games, renting games is easy and convenient. Follow these simple steps:</p>
        <ol className='list-decimal list-inside mb-4'>
          <li>Browse our extensive collection of games and select the one you want to rent.</li>
          <li>Click on the game to view more details and check its availability.</li>
          <li>If the game is available, click on the "Rent" button.</li>
          <li>Follow the prompts to complete the rental process, including providing payment information.</li>
          <li>Once the rental is confirmed, you can start playing the game immediately.</li>
          <li>Return the game by the due date to avoid late fees.</li>
        </ol>
        <p>If you encounter any issues or have questions about renting games, feel free to contact our customer support team for assistance.</p>
        <p className='mt-8 font-semibold'>Contact Information:</p>
        <ul className='list-disc list-inside'>
          <li>Email: support@horizongames.com</li>
          <li>Phone: 1-800-123-4567</li>
          <li>Live Chat: Available on our website during business hours</li>
        </ul>
      </div>
    </div>
  );
}

export default Help;
