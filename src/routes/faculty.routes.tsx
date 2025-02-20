import FacultyDashboard from "../pages/FacultyPages/FacultyDashboard/FacultyDashboard";
import OfferedCourse from "../pages/FacultyPages/OfferedCourse/OfferedCourse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse />,
  },
];
