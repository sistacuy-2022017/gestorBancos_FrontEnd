import { DashboardPage } from "./pages/Dashboard/Dashboard.jsx";
import { AuthPage } from "./pages/Auth/authPage.jsx"; // Assuming you have an AuthPage component
import { element } from "three/examples/jsm/nodes/Nodes.js";
const routes = [
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/*",
    element: <DashboardPage />,
  },
];

export default routes;
