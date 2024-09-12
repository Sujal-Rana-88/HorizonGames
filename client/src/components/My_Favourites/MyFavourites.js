import React from 'react';

function MyFavorites() {
  // Dummy games information
  const favoriteGames = [
    {
      title: 'Red Dead Redemption 2',
      genre: 'Action',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpn7r_Udx65eAQW4rwDKny-jSE0KAiiPD-Cg&s',
      description: 'Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.'
    },
    {
      title: 'Ghost of Tsushima',
      genre: 'Adventure',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGZG8Fjp-W9yuIaHOxacOvJwMGEBxgWTs8g&s',
      description: 'Ghost of Tsushima is an action game set in feudal Japan. Players take the role of Jin Sakai, a samurai risking everything to defend Tsushima from the Mongol invaders pillaging the land. Players travel the Japanese countryside helping civilians and defending them from the Mongol invaders. Frequent sword battles take place in 3rd person melee and ranged combat. Successful attacks can result in dismemberment and decapitation, often accompanied by large blood-splatter effects. Players can also use stealth to take out enemies unseen, with assassination kills. Cinematics and other scenes show other examples of intense violence and gore, including a scene where a civilian is burned alive, a scene showing a person beheaded and the decapitated man’s head held up towards the camera. Red blood can be seen in environments, on clothing, and spraying from successful attacks.'
    },
  ];

  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className='text-black font-bold text-2xl text-center'>
        My Favorites
      </h3>
      <div className='w-full max-w-[1240px] mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'>
          {favoriteGames.map((game, index) => (
            <div key={index} className='bg-gray-100 p-4 rounded-md'>
              <img src={game.imageUrl} alt={game.title} className='w-full h-40 object-cover mb-2 rounded-md' />
              <h4 className='text-lg font-semibold mb-2'>{game.title}</h4>
              <p className='text-sm text-gray-500 mb-2'>{game.genre}</p>
              {/* Limit description length and add scrollbar */}
              <div className='description-scroll h-24 overflow-y-auto'>
                <p className='text-sm'>{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyFavorites;
