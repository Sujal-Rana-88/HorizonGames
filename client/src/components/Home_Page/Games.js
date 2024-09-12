import React, { useState } from "react";
import { gameData } from "../../data/data";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const Games = () => {
  const [games, setGames] = useState(gameData);

  const filterCat = (category) => {
    setGames(gameData.filter((item) => item.category === category));
  };

  return (
    <div className="text-black font-bold text-2xl text-center py-2">
      <h1 className="pt-4">Our Games</h1>
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex justify-center md:justify-center">
          <button
            onClick={() => setGames(gameData)}
            className="m-1 border-black text-white bg-black hover:bg-white hover:text-black hover:border-black px-2 py-2 text-base md:text-lg"
          >
            All
          </button>
          <button
            onClick={() => filterCat('Open-World Games')}
            className="m-1 border-black text-white bg-black hover:bg-white hover:text-black hover:border-black px-2 py-2 text-base md:text-lg"
          >
            Open-World
          </button>
          <button
            onClick={() => filterCat('Action-adventure Games')}
            className="m-1 border-black text-white bg-black hover:bg-white hover:text-black hover:border-black px-2 py-2 text-base md:text-lg"
          >
            Action-adventure
          </button>
          <button
            onClick={() => filterCat('Racing Games')}
            className="m-1 border-black text-white bg-black hover:bg-white hover:text-black hover:border-black px-2 py-2 text-base md:text-lg"
          >
            Racing
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-6">
        {games.map((item) => (
          <div key={item.id} className="border-none hover:scale-105 duration-300 pl-4 pr-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-lg"
            />
            <div className="flex justify-between py-2 px-2">
              <p className="font-bold text-black">{item.name}</p>
              <p className="bg-black h-13 w-18 rounded-full -mt-6 text-white py-2 px-2 border-4">
                {item.price}
              </p>
            </div>
            <div className="pl-2 py-4 -mt-7">
              <p className="flex items-center text-indigo-600 font-normal text-xl">
                View More <ArrowSmRightIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
