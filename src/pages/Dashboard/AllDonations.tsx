import TableRow from "@/components/ui/TableRow";
import TableTitle from "@/components/ui/TableTitle";
import Title from "@/components/ui/Title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AllDonations = () => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center -mt-20">
        <Title title="All Donations" />
      </div>
      <div>
        <TableTitle />
        <div>
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
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
