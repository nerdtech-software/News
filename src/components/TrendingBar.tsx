import { FaChartLine } from "react-icons/fa";

export default function TrendingBar() {
  const trending = [
    "OBC reservation",
    "Maratha Reservation",
    "Narendra Modi",
    "Rahul Gandhi",
    "LetsUpp YouTube",
    "LetsUpp Instagram",
  ];

  return (
    <div className="flex items-center justify-center gap-6 px-6 py-2 bg-white shadow-sm text-sm overflow-x-auto">
      <div className="flex items-center gap-2 text-orange-500 font-semibold">
        <FaChartLine />
        TRENDING
      </div>
      {trending.map((item, index) => (
        <a key={index} href="#" className="text-gray-700 hover:text-blue-600 whitespace-nowrap">
          {item}
        </a>
      ))}
    </div>
  );
}
