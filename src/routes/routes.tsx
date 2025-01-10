import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LogIn from "../pages/LogIn/LogIn";
import Register from "../pages/Register/Register";
import { adminPaths } from "./admin.routes";
import { routerGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <App />,
    children: routerGenerator(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routerGenerator(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routerGenerator(studentPaths),
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
