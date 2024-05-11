import { Outlet } from "react-router-dom";
import Container from "../ui/Container";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <Container>
      <div className="flex mx-auto">
        <Sidebar />
        <Outlet />
      </div>
    </Container>
  );
};

export default DashboardLayout;
