import logo from "../../assets/images/logo.png";
import aboutImage from "../../assets/images/about.jpg";
import Title from "@/components/ui/Title";

const About = () => {
  return (
    <section className="">
      <Title title="Let's Know Us" left={true} />
      <div className="flex items-center justify-between gap-16 px-6 py-10 text-white bg-black rounded-md ">
        <div>
          <img className="rounded-e-full" src={aboutImage} alt="About Images" />
        </div>
        <div>
          <div className="flex items-center ">
            <img className="size-14" src={logo} alt="logo" />
            <h2 className="text-3xl font-semibold text-color-text ">
              donator.JS
            </h2>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-xs font-thin">Since 1998 - 2024</p>
            <p className="text-xs font-thin">
              <span className="font-bold text-color-text">Address : </span>{" "}
              House No:#299, Rode No:3, Gulshan, Dhaka, Bangladesh
            </p>
            <span className="block text-xs text-color-text">
              Email: donator.js.@gmail.com
            </span>
            <div className="h-[2px] max-w-[400px] bg-secondary-gradient mt-6"></div>

            <p className="max-w-[50ch] mt-1 text-justify">
              Welcome to{" "}
              <span className="font-semibold text-color-text">donator.js</span>,
              where passion meets purpose. We are a community-driven initiative
              dedicated to making a positive impact in the lives of those in
              need. Our journey began with a simple belief: that together, we
              can create meaningful change.
            </p>
            <div className="h-[2px] max-w-[400px] bg-secondary-gradient mt-6"></div>
          </div>
          <div className="flex gap-6 ">
            <div className="flex flex-col items-center justify-center pt-4 mt-4 border-e-2 pe-4">
              <h1 className="text-4xl font-semibold text-color-text">3k+ </h1>
              <h1 className="text-4xl">Blood</h1>
            </div>
            <div className="flex flex-col items-center justify-center pt-4 mt-4 border-e-2 pe-4">
              <h1 className="text-4xl font-semibold text-color-text">30k+ </h1>
              <h1 className="text-4xl">Dress</h1>
            </div>
            <div className="flex flex-col items-center justify-center pt-4 mt-4">
              <h1 className="text-4xl font-semibold text-color-text">550k+ </h1>
              <h1 className="text-4xl">Food</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
