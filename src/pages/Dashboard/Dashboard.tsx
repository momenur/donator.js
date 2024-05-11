import Title from "@/components/ui/Title";
import PieGraph from "./PieGraph";

const Dashboard = () => {
  return (
    <section className="w-full ps-10">
      <div className="flex items-center justify-center -mt-28 md:-mt-20">
        <Title title="Dashboard" />
      </div>
      <div className="flex flex-col w-full gap-4 md:flex-row">
        <PieGraph />

        <div className="w-full ">
          <h1 className="mb-4 text-center md:text-3xl md:pb-10">
            Summary Table View
          </h1>
          <div className="flex justify-between w-full px-10 py-3 font-semibold text-white bg-gray-600 md:py-6 rounded-t-md">
            <h4 className="flex-1">Dress</h4>
            <h4 className="flex-1">Blood</h4>
            <h4 className="flex-1">Medicine</h4>
            <h4 className="flex-1">Food</h4>
          </div>
          <div className="flex justify-between w-full px-3 py-3 text-xs md:py-6 md:px-10 md:text-xl bg-secondary-gradient rounded-b-md">
            <h4 className="flex-1 truncate">3K+ Dress</h4>
            <h4 className="flex-1 truncate">30K+ Blood</h4>
            <h4 className="flex-1 truncate">50k+ Medicine</h4>
            <h4 className="flex-1 truncate">550k+ Food</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
