import SideDrawer from "./SideDrawer";
import "./style.css";
import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../Button";
import { Link } from "react-router-dom";

function Header() {
  const isDesktop = useMediaQuery("(min-width: 800px)");

  return (
    <div className=" sticky top-0 z-50 bg-[#111111]">
      {isDesktop ? (
        <div className="flex justify-between items-center p-7">
          <h1 className="font-semibold text-3xl pl-5">
            CryptoTracker<span className="text-blue-400 text-3xl"> .</span>
          </h1>
          <div className="flex justify-evenly items-center gap-4 m-2">
            <Link to="/" className="link hover:text-white">
              <p className="text-lg">Home</p>
            </Link>
            <Link to="/compare" className="link hover:text-white">
              <p className="text-lg">Compare</p>
            </Link>
            <Link to="/watchlist" className="link hover:text-white">
              <p className="text-lg">Watchlist</p>
            </Link>
            <Link to="/dashboard" className="link hover:text-white">
              <Button text={"Dashboard"} onClick={()=>console.log("clicked")} />
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-between p-5">
          <h1 className="font-semibold text-xl">
            CryptoTracker<span className="text-blue-400 text-xl"> .</span>
          </h1>
          <SideDrawer />
        </div>
      )}
    </div>
  );
}
export default Header;
