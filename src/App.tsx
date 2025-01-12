import MainLayout from "./components/layout/MainLayout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;
