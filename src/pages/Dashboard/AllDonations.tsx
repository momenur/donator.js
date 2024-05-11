import TableRow from "@/components/ui/TableRow";
import TableTitle from "@/components/ui/TableTitle";
import Title from "@/components/ui/Title";
import { Button } from "@/components/ui/button";
import { useGetDonationsQuery } from "@/redux/api/api";
import { Link } from "react-router-dom";

// type TDonation = {
//   id: string;
//   title: string;
//   image: string;
//   category: string;
//   amount: string;
//   description: string;
// };

const AllDonations = () => {
  const { data: donations, isLoading } = useGetDonationsQuery(undefined);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="w-full ps-10">
      <div className="flex items-center justify-center -mt-20">
        <Title title="All Donations" />
      </div>
      <div>
        <TableTitle />
        <div>
          {donations?.map((item) => (
            <TableRow
              id={item._id}
              title={item.title}
              category={item.category}
              amount={item.amount}
            />
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Link to="/dashboard/create-donation">
          <Button className="px-10 py-8 mt-16 text-2xl rounded-full bg-secondary-gradient">
            Add Donation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default AllDonations;
