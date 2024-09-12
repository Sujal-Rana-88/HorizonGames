// src/utils/api.js

import axios from 'axios';

const YOUR_API_KEY = '645e2650c6d44df5a0ecc0052e9948d3';

const fetchGames = async () => {
  try {
    const response = await axios.get('https://api.rawg.io/api/games', {
      params: {
        key: YOUR_API_KEY,
        // Other parameters as needed
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching games:', error);
    return null;
  }
};

export { fetchGames };
