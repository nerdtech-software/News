import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ShashiTharoorReply from "./components/ShashiTharoorReply";
import HomePage from "./home/HomePage";
import MaharashtraNewsPage from "./home/MaharashtraNewsPage";
import MaharashtraNewsPage1 from "./home/MaharashtraNewsPage1";
import MaharashtraNewsPage2 from "./home/MaharashtraNewsPage2";
import MumbaiNewsPage from "./home/MumbaiNewsPage";
import PuneNewsPage from "./home/PuneNewsPage";
import MarathaReservation from "./tranding/MarathaReservation";
import { default as NarendraModi, default as OBCReservation } from "./tranding/NarendraModi";
import RahulGandhi from "./tranding/RahulGandhi";

const App = () => {
  const Layout = () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <ShashiTharoorReply />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/Maharashtra",
          element: <MaharashtraNewsPage />,
        },
        {
          path: "/Politics",
          element: <MaharashtraNewsPage1/>,
        },
        {
          path: "/Country",
          element: <MaharashtraNewsPage2 />,
        },
        {
          path: "/mumbai",
          element: <MumbaiNewsPage />,
        },
        {
          path: "/OBCReservation",
          element: <OBCReservation/>,
        },
        {
          path: "/marathaReservation",
          element: <MarathaReservation/>,
        },
        {
          path: "/narendraModi",
          element: <NarendraModi/>,
        },
        {
          path: "/rahulGandhi",
          element: <RahulGandhi />,
        },
        {
          path: "/pune",
          element: <PuneNewsPage/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default App;
