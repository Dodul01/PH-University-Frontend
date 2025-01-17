import AcademicDepartment from "../pages/AdminPages/AcademicManagement/AcademicDepartment";
import AcademicFaculty from "../pages/AdminPages/AcademicManagement/AcademicFaculty";
import AcademicSemester from "../pages/AdminPages/AcademicManagement/AcademicSemester";
import CreateAcademicDepartment from "../pages/AdminPages/AcademicManagement/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/AdminPages/AcademicManagement/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/AdminPages/AcademicManagement/CreateAcademicSemester";
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
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
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
