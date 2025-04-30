import Navbar from "./NavBar";
import TopBar from "./TopBar";
import TrendingBar from "./TrendingBar";
const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-white shadow-lg shadow-gray-300 ">
    <TopBar/>
    <Navbar />
    <TrendingBar />
  </div>
);
}

export default Header
