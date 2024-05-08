import Title from "@/components/ui/Title";
import PieGraph from "./PieGraph";

const Dashboard = () => {
  return (
    <section className="w-full">
      <div className="flex items-center justify-center -mt-20">
        <Title title="Dashboard" />
      </div>
      <div className="flex w-full">
        <PieGraph />
        <div className="w-full">
          <h1 className="pb-10 text-3xl text-center">Summary Table View</h1>
          <div className="flex justify-between w-full px-10 py-6 font-semibold text-white bg-gray-600 rounded-t-md">
            <h4 className="flex-1">Dress</h4>
            <h4 className="flex-1">Blood</h4>
            <h4 className="flex-1">Medicine</h4>
            <h4 className="flex-1">Food</h4>
          </div>
          <div className="flex justify-between w-full px-10 py-6 text-xl bg-secondary-gradient rounded-b-md">
            <h4 className="flex-1">3K+ Dress</h4>
            <h4 className="flex-1">30K+ Blood</h4>
            <h4 className="flex-1">50k+ Medicine</h4>
            <h4 className="flex-1">550k+ Food</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
