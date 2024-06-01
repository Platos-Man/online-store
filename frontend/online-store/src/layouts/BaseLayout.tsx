import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface BaseLayout {}

const BaseLayout = () => {
  return (
    <>
      <Header />
      // sidebar?
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
