import React, { useEffect, useRef, useState } from "react";
import instance from "../axiosInstance";
import Swal from "sweetalert2";
import MovieCard from "./MovieCard";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import HrMovieCard from "./HrMovieCard";
const screenWidth = window.innerWidth;

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=89390febad178a7bbd3f7342591be00d";

function MovieLists({ dataMovieLists, index_ }) {
  const [movieLists, setMovieLists] = useState([]);

  const elementRef = useRef();
  async function getMovieListById() {
    if (!dataMovieLists) return;
    try {
      const { data } = await instance.get(
        `${movieByGenreBaseURL}&with_genres=${dataMovieLists}`
      );
      console.log(data.results);

      setMovieLists(data.results);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message,
      });
    }
  }

  useEffect(() => {
    getMovieListById();
  }, [dataMovieLists]);

  const slideRight = (element) => {
    if (element.scrollLeft + screenWidth >= element.screenWidth) {
      element.scrollLeft = 0;
    } else {
      element.scrollLeft += screenWidth - 200;
    }
  };

  const slideLeft = (element) => {
    if (element.scrollLeft <= 0) {
      element.scrollLeft = element.screenWidth;
    } else {
      element.scrollLeft -= screenWidth - 200;
    }
  };
  return (
    <div>
      <HiChevronLeft
        onClick={() => slideLeft(elementRef.current)}
        className={`${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[170px]"
        } text-white text-[30px] absolute  mx-[-30px] cursor-pointer hidden md:block`}
      />
      <HiChevronRight
        onClick={() => slideRight(elementRef.current)}
        className={`${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[170px]"
        } text-white text-[30px] absolute mt-[170px] mx-[1230px] cursor-pointer hidden md:block `}
      />

      <div
        className="flex overflow-x-auto scroll-smooth scrollbar-hide gap-8 py-5 px-3  "
        ref={elementRef}
      >
        {movieLists.map((el, index) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard key={index} movie={el} />
            ) : (
              <MovieCard key={index} movie={el} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default MovieLists;
