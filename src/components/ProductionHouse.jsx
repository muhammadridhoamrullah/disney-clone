import React from "react";

import disneyF from "./../assets/Images/disney.png";
import marvelF from "../assets/Images/marvel.png";
import nationalF from "../assets/Images/nationalG.png";
import pixarF from "../assets/Images/pixar.png";
import starwarsF from "../assets/Images/starwar.png";

import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import nationalV from "../assets/Videos/national-geographic.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import starwarsV from "../assets/Videos/star-wars.mp4";

function ProductionHouse() {
  const data = [
    {
      id: 1,
      image: disneyF,
      video: disneyV,
    },
    {
      id: 2,
      image: marvelF,
      video: marvelV,
    },
    {
      id: 3,
      image: nationalF,
      video: nationalV,
    },
    {
      id: 4,
      image: pixarF,
      video: pixarV,
    },
    {
      id: 5,
      image: starwarsF,
      video: starwarsV,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
      {data.map((el, index) => (
        <div
          key={index}
          className="relative border-[2px] border-gray-600 rounded-lg  hover:scale-110 transition-all duration-200 cursor-pointer ease-in-out shadow-xl shadow-gray-900"
        >
          <img src={el.image} alt="Image" className="w-full z-[1]" />
          <video
            src={el.video}
            autoPlay
            loop
            playsInline
            className="absolute inset-0 top-0 rounded-lg z-0 opacity-0 hover:opacity-50"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
