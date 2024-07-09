import { Outlet } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Wrapper from "../shared/wrapper/Wrapper";

const MainLayout = () => {
  return (
    <Wrapper>
      <HomePage />
      <Outlet />
      <h1>Footer</h1>
    </Wrapper>
  );
};

export default MainLayout;
