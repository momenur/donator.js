import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="w-full  mx-auto bg-secondary-gradient max-w-7xl pb-[1px]">
      <div className="flex items-center justify-between bg-white h-[70px] md:h-[100px] ">
        <div className="flex items-center ">
          <img className="size-8 md:size-14" src={logo} alt="logo" />
          <h2 className="text-xl font-semibold md:text-5xl text-color-text ">
            donator.JS
          </h2>
        </div>
        <ul className="flex items-center gap-4 text-xs font-semibold md:text-lg">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/donations">Donations</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">
              <Button className="mb-1 rounded-full md:text-lg bg-secondary-gradient">
                Login
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
