import React, { useEffect, useRef, useState } from "react";
import instance from "../axiosInstance";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const elementRef = useRef();
  async function getTrendingMovies() {
    try {
      const { data } = await instance.get("/trending/movie/day");

      setTrendingMovies(data.results);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const sliderRight = (element) => {
    // Jika elemen sudah di ujung kanan, reset ke awal
    if (element.scrollLeft + screenWidth >= element.scrollWidth) {
      element.scrollLeft = 0;
    } else {
      element.scrollLeft += screenWidth - 110;
    }
  };

  const sliderLeft = (element) => {
    // Jika elemen sudah di ujung kiri, reset ke akhir
    if (element.scrollLeft <= 0) {
      element.scrollLeft = element.scrollWidth;
    } else {
      element.scrollLeft -= screenWidth - 110;
    }
  };
  return (
    <div>
      <HiChevronLeft
        className="text-white text-[30px] absolute mx-8 mt-[200px] cursor-pointer hidden md:block"
        onClick={() => sliderLeft(elementRef.current)}
      />

      <HiChevronRight
        className="text-white text-[30px] absolute mx-8 mt-[200px] cursor-pointer right-0 hidden md:block"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {trendingMovies.map((el, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + el.backdrop_path}
            alt="Slider"
            className="min-w-full md:h-[400px] object-cover object-left-top mr-5 rounded-lg hover:border-[4px] border-[#0F1014] transition-all ease-in"
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
