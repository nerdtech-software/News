import { FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";

 function TrendingBar() {
  const trending = [
    { label: "OBC reservation", link: "OBCReservation" },
    { label: "Maratha Reservation", link: "marathaReservation" },
    { label: "Narendra Modi", link: "narendraModi" },
    { label: "Rahul Gandhi", link: "rahulGandhi" },
    { label: "LetsUpp YouTube", link: "youTube" },
    { label: "LetsUpp Instagram", link: "instagram" },
  ];

  return (
    <div className="flex items-center justify-center gap-6 px-6 py-2 bg-white text-sm overflow-x-auto">
      <div className="flex items-center gap-2 text-orange-500 font-semibold">
        <FaChartLine />
        TRENDING
      </div>
      {trending.map((item) => (
       <Link to={item.link} key={item.label} className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
        <span className="text-gray-700 hover:text-blue-600 whitespace-nowrap">{item.label}</span>
       </Link>
      ))}
    </div>
  );
}

export default TrendingBar;