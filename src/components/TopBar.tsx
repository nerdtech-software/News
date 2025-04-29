import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaTimes,
  FaYoutube,
} from "react-icons/fa";

export default function TopBar() {
  return (
    <div
      className="bg-blue-800 text-white bg-cover relative bg-top "
      style={{
        backgroundImage: `url('https://dvmep2zap7gv4.cloudfront.net/wp-content/uploads/2022/10/bg.png')`
      
      }}
    >
      <div className="flex items-start justify-between px-4 py-3 flex-wrap md:flex-nowrap gap-4">
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
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold whitespace-nowrap">
            Nerdtech
          </h1>
        </div>
      </div>
    </div>
  );
}
