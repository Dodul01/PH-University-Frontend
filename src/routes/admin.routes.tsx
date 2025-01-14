import AcademicSemester from "../pages/AdminPages/AcademicManagement/AcademicSemester";
import AdminDashboard from "../pages/AdminPages/AdminDashboard/AdminDashboard";
import CreateAdmin from "../pages/AdminPages/CreateAdmin/CreateAdmin";
import CreateFaculty from "../pages/AdminPages/CreateFaculty/CreateFaculty";
import CreateStudent from "../pages/AdminPages/CreateStudent/CreateStudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Menmber",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
];
