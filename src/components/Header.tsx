import Navbar from "./NavBar";
import TopBar from "./TopBar";
import TrendingBar from "./TrendingBar";

export default function Header() {
  return (
    <header className=" fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <TopBar />
      <Navbar />
      <TrendingBar />
    </header>
  );
}
