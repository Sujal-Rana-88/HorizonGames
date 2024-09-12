import React from 'react';

function MyAccount() {
  // Dummy account information
  const accountInfo = {
    username: 'example_user',
    email: 'example@example.com',
    membershipType: 'Premium',
    joinDate: 'June 1, 2023'
  };

  // Dummy buy games information
  const rentGames = [
    {
      title: 'GTA V',
      date: 'May 10, 2024 - May 20, 2024',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcQyro8fDd-GVgV9_ZuBT4jqT9aCFkk5fvS4Cm7bkWJmjbrHPShVlXoVYwuoh3K5pNKW0&usqp=CAU' // Replace with actual image URL
    },
    {
      title: 'God of war',
      date: 'April 5, 2024 - April 15, 2024',
      imageUrl: 'https://deadline.com/wp-content/uploads/2022/03/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7-e1646683029138.jpeg?w=1024' // Replace with actual image URL
    },
    // Add more games as needed
  ];

  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-black font-bold text-2xl text-center'>
        My Account
      </h3>
      <div className='w-full max-w-[1240px] mx-auto px-4'>
        {/* Account Information */}
        <div className='bg-gray-100 p-8 rounded-md mb-8'>
          <h4 className='text-lg font-semibold mb-4'>Account Information</h4>
          <p><span className='font-semibold'>Username:</span> {accountInfo.username}</p>
          <p><span className='font-semibold'>Email:</span> {accountInfo.email}</p>
          <p><span className='font-semibold'>Membership Type:</span> {accountInfo.membershipType}</p>
          <p><span className='font-semibold'>Join Date:</span> {accountInfo.joinDate}</p>
        </div>
        
        {/* Bought Games Information */}
        <div className='bg-gray-100 p-8 rounded-md'>
          <h4 className='text-lg font-semibold mb-4'>Rent Games History</h4>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {rentGames.map((game, index) => (
              <div key={index} className='border border-gray-300 p-4 rounded-md'>
                <img src={game.imageUrl} alt={game.title} className='w-full h-40 object-cover mb-2' />
                <p className='font-semibold'>{game.title}</p>
                <p>{game.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
