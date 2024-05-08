import logo from "../../assets/images/logo.png";
import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className=" h-[100px] bg-secondary-gradient pt-[0.5px] pb-[1px] my-2 max-w-7xl mx-auto">
      <div className="flex items-center justify-between h-full px-2 bg-white">
        <div className="flex items-center ">
          <img className="size-14" src={logo} alt="logo" />
          <h2 className="text-3xl font-semibold text-color-text ">
            donator.JS
          </h2>
        </div>

        <p>© donator.JS 2024</p>

        <form className="flex items-center text-black">
          <input
            className="px-4 h-[40px] text-sm font-semibold border-2 border-e-0 border-orange-500 rounded-s-full focus:bg-gray-200 focus:border-2 focus:outline-none focus:border-e-0"
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
          />
          <Button className="h-[40px] text-sm rounded-e-full bg-secondary-gradient">
            Subscribe
          </Button>
        </form>

        <div className="flex gap-4 text-xl text-black">
          <a href="#">
            <span className="transition-all hover:text-color-text hover:mb-32">
              <FaFacebook />
            </span>
          </a>
          <a href="#">
            <span className="transition-all hover:text-color-text hover:mb-32">
              <FaGoogle />
            </span>
          </a>
          <a href="#">
            <span className="transition-all hover:text-color-text hover:mb-32">
              <FaInstagram />
            </span>
          </a>
          <a href="#">
            <span className="transition-all hover:text-color-text hover:mb-32">
              <FaTwitter />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
