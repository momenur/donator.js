import { Outlet } from "react-router-dom";
import Container from "../ui/Container";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <Container>
      <div className="flex max-w-full mx-auto">
        <Sidebar />
        <div className="mx-auto md:w-[1000px]">
          <Outlet />
        </div>
      </div>
    </Container>
  );
};

export default DashboardLayout;
