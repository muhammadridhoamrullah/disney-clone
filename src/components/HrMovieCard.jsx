import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function HrMovieCard({ movie }) {
  const titleWords = movie.title.split(" ");
  const displayedTitle =
    titleWords.length > 5
      ? titleWords.slice(0, 5).join(" ") + " ..."
      : movie.title;

  return (
    <>
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        alt={movie.title}
        className="w-full h-36 rounded-lg hover:border-[2px] border-gray-500 hover:scale-110 transition-all duration-200 cursor-pointer ease-in-out"
      />
      <h2 className="text-white font-semibold ">{displayedTitle}</h2>
    </>
  );
}

export default HrMovieCard;
