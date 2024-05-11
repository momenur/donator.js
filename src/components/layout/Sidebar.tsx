import {
  FaCreativeCommons,
  FaDashcube,
  FaDonate,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="bg-secondary-gradient md:max-w-[300px] max-w-[50px] md:min-w-[180px] h-screen text-white font-semibold px-4 pt-10  fixed start-0 ">
      <ul className="flex flex-col gap-3">
        <Link to="/">
          <li className="flex items-center gap-2 truncate">
            <span>
              <FaHome />
            </span>
            Home
          </li>
        </Link>
        <Link to="/dashboard">
          <li className="flex items-center gap-2 truncate">
            <span>
              <FaDashcube />
            </span>
            Dashboard
          </li>
        </Link>
        <Link to="donations">
          <li className="flex items-center gap-2 truncate">
            <span>
              <FaDonate />
            </span>
            All Donations
          </li>
        </Link>
        <Link to="create-donation">
          <li className="flex items-center gap-2 truncate">
            <span>
              <FaCreativeCommons />
            </span>
            Create Donation
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default Sidebar;
