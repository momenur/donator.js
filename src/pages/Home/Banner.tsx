import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen mt-6 rounded-s-full bg-banner-gradient">
      <div className="flex flex-col items-center justify-center h-screen px-6 py-10 ">
        <h1 className="text-6xl font-bold text-white">
          Empowering the Next Generation:
        </h1>
        <i className="pt-6 pb-4 text-3xl font-semibold text-white">
          Advancing Science Education for a Brighter Tomorrow
        </i>
        <p className="font-light text-white">
          Welcome to our platform dedicated to making a difference in the world!
          At{" "}
          <span className="text-xl font-bold text-color-text">donator.js</span>,
          we believe in the power of collective action to create meaningful
          change.
        </p>
        <Link to="/donations">
          <Button className="py-10 mt-20 text-2xl rounded-full px-14 bg-secondary-gradient">
            Donate Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
