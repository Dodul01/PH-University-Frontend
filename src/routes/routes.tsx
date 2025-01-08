import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import AdminDashboard from "../pages/AdminPages/AdminDashboard/AdminDashboard";
import CreateStudent from "../pages/AdminPages/CreateStudent/CreateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: "create-student",
        element: <CreateStudent />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
