import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="h-10 rounded-lg p-1 bg-lite flex items-center justify-evenly">
      <NavLink to="/">
        <p className="text-sm">Home</p>
      </NavLink>
      <NavLink to="/products">
        <p className="text-sm">Products</p>
      </NavLink>
      <NavLink to="/productManagement">
        <p className="text-sm">Products Management</p>
      </NavLink>
      <NavLink to="/cart">
        <p className="text-sm">Cart</p>
      </NavLink>
      <NavLink to="/">
        <p className="text-sm">Wishlist</p>
      </NavLink>
      <NavLink to="about">
        <p className="text-sm">About Us</p>
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
