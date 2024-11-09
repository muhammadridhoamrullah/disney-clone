import React from "react";
import GenreLists from "../constants/GenreLists";
import MovieLists from "./MovieLists";

function GenreMovieLists() {
  return (
    <div className="">
      {GenreLists.genere.map(
        (el, index) =>
          index <= 4 && (
            <div key={index} className="p-5 px-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{el.name}</h2>
              <MovieLists dataMovieLists={el.id} index_={index} />
            </div>
          )
      )}
    </div>
  );
}

export default GenreMovieLists;
