import { Outlet } from "react-router-dom";
import Wrapper from "../shared/wrapper/Wrapper";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";
import NavigationBar from "../shared/navbar/NavigationBar";

const MainLayout = () => {
  return (
    <Wrapper>
      <Header />
      <NavigationBar />
      <div className="min-h-screen p-1">
        <Outlet />
      </div>
      <Footer />
    </Wrapper>
  );
};

export default MainLayout;
