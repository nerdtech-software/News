import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
 function TopBar() {
  return (
  <div
      className="bg-blue-800 text-white bg-cover relative bg-top "
       
      style={{
        backgroundImage: `url('https://dvmep2zap7gv4.cloudfront.net/wp-content/uploads/2022/10/bg.png')`,
      }}
    >
      <div className="flex items-start justify-between px-4 py-2 flex-wrap md:flex-nowrap gap-4">
        {/* Left Section */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 text-xl sm:text-2xl">
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaTimes className="cursor-pointer" />
            <FaYoutube className="cursor-pointer" />
          </div>
          <div className="flex gap-2 items-center text-sm sm:text-base">
            <span>Download App</span>
            <FaGooglePlay className="cursor-pointer" />
            <FaApple className="cursor-pointer" />
          </div>
        </div>

        {/* Center Section */}
         {/* Set height on parent if needed */}
         <div className="absolute top-0 left-0 right-0 flex items-center justify-center h-full ">
  <Link to="/home">
    <img className="w-[140px] h-auto" src={logo} alt="Logo" />
  </Link>
</div>
      </div>
    </div>
  );
}

export default TopBar;
