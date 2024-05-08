import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import AllDonations from "@/pages/Dashboard/AllDonations";
import CreateDonation from "@/pages/Dashboard/CreateDonation";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Donations from "@/pages/Donations/Donations";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "donations",
        element: <Donations />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "donations",
        element: <AllDonations />,
      },
      {
        path: "create-donation",
        element: <CreateDonation />,
      },
    ],
  },
]);

export default router;
