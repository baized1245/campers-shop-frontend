import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import ProfileIcon from "./ProfileIcon";
import SearchField from "./SearchField";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-44" />
      </Link>
      <SearchField />
      <ProfileIcon />
    </div>
  );
};

export default Header;
