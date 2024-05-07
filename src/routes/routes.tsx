import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Page1 from "@/pages/Dashboard/Page1";
import Page2 from "@/pages/Dashboard/Page2";
import Home from "@/pages/Home/Home";
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
        element: <About />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Page1 />,
      },
      {
        path: "page2",
        element: <Page2 />,
      },
    ],
  },
]);

export default router;
