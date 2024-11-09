import GenreMovieLists from "../components/GenreMovieLists";
import ProductionHouse from "../components/ProductionHouse";
import Slider from "../components/Slider";
export default function Home() {
  return (
    <div className="">
      <Slider />
      <ProductionHouse />
      <GenreMovieLists />
    </div>
  );
}
