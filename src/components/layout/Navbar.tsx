import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-[100px] px-4 mx-auto bg-white max-w-7xl">
      <div className="flex items-center">
        <img className="size-14" src={logo} alt="logo" />
        <h2 className="text-5xl font-semibold text-color-text ">donator.JS</h2>
      </div>
      <ul className="flex items-center gap-4 text-lg font-semibold">
        <li>Home</li>
        <li>Donations</li>
        <li>Dashboard</li>
        <li>
          <Link to="/donations">
            <Button className="mb-1 text-lg rounded-full bg-secondary-gradient">
              Login
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
