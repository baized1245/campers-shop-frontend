import { Outlet } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Wrapper from "../shared/wrapper/Wrapper";
import Footer from "../shared/footer/Footer";

const MainLayout = () => {
  return (
    <Wrapper>
      <HomePage />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  );
};

export default MainLayout;
