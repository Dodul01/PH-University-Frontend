import OffredCourse from "../pages/StudentPages/OffredCourse/OffredCourse";
import StudentDashboard from "../pages/StudentPages/StudentDashboard/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OffredCourse />,
  },
];
