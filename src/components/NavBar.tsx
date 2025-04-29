import { FaHome } from "react-icons/fa";

export default function Navbar() {
  const links = [
    "Politics",
    "Country",
    "Maharashtra",
    "Mumbai",
    "Pune",
    "Abroad",
    "Entertainment",
    "Sports",
    "Lifestyle",
    "Gallery",
    "Web Stories",
  ];

  return (
    <nav className="border-b overflow-x-auto whitespace-nowrap">
      <div className="flex items-center gap-4 sm:gap-6 px-4 py-3 min-w-max">
        <FaHome className="text-xl flex-shrink-0 cursor-pointer" />
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="font-medium text-sm sm:text-base md:text-lg hover:underline"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}









 