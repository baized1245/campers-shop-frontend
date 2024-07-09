import Logo from "../../../assets/Logo.svg";
import ProfileIcon from "./ProfileIcon";
import SearchField from "./SearchField";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={Logo} alt="Logo" className="w-44" />
      <SearchField />
      <ProfileIcon />
    </div>
  );
};

export default Header;
