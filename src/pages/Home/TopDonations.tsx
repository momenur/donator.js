import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";
import { Button } from "@/components/ui/button";
import { useGetDonationsQuery } from "@/redux/api/api";
import { Link } from "react-router-dom";

const TopDonations = () => {
  const { data: donations, isLoading } = useGetDonationsQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="">
      <Title title="top donations" left={true} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-items-center">
        {donations.map((item) => (
          <Card donation={item} />
        ))}
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
