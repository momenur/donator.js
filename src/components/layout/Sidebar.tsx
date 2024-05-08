import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="bg-secondary-gradient max-w-[300px] min-w-[180px] h-screen text-white font-semibold px-4 pt-10">
      <ul className="flex flex-col gap-3">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="donations">All Donations</Link>
        </li>
        <li>
          <Link to="create-donation">Create Donation</Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
