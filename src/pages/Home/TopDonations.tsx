import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const TopDonations = () => {
  return (
    <section className="">
      <Title title="top donations" left={true} />
      <div className="grid grid-cols-3 gap-4 justify-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/donations">
          <Button className=" max-w-[200px] mt-8 text-xl rounded-full bg-secondary-gradient">
            View All Donations
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default TopDonations;
