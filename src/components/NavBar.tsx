import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
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
    <nav className="border-b overflow-x-auto">
      <div className="flex justify-center items-center gap-4 sm:gap-6 px-4 py-3 w-full min-w-max">
        <Link to="/">
          <FaHome className="text-xl flex-shrink-0 cursor-pointer" />
        </Link>
        {links.map((link, index) => (
          <Link
            key={index}
            to={`/${link.toLowerCase().replace(/\s+/g, "-")}`}
            className="font-medium text-sm sm:text-base md:text-lg hover:underline"
          >
            {link}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
