import { Link } from "react-router-dom";
import logoDisney from "../assets/logoDisney.png";
import { HiMiniUser } from "react-icons/hi2";

export default function Navbar() {
  return (
    <div className="flex justify-between text-white p-4">
      <div className="flex gap-8">
        <Link to={"/"}>
          <img
            src={logoDisney}
            alt="Logo Disney"
            className="h-10 cursor-pointer"
          />
        </Link>
        <div className="flex items-center gap-8 font-semibold">
          <Link to={"/disneyPlusHotStar"}>
            <div className="cursor-pointer hover:underline underline-offset-8">
              DISNEY+ HOTSTAR
            </div>
          </Link>
          <Link to={"/movies"}>
            <div className="cursor-pointer hover:underline underline-offset-8">
              MOVIES
            </div>
          </Link>
          <Link to={"/parks"}>
            <div className="cursor-pointer hover:underline underline-offset-8">
              PARKS
            </div>
          </Link>
          <Link to={"/cruise"}>
            <div className="cursor-pointer hover:underline underline-offset-8">
              CRUISE
            </div>
          </Link>
        </div>
      </div>

      <div>
        <HiMiniUser className="w-10 h-10 cursor-pointer" />
      </div>
    </div>
  );
}
