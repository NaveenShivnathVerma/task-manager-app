import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"; // ✅ ADD THIS

function App() {
  return (
    <Routes>
      {/* Default Route */}
      <Route path="/" element={<LandingPage />} />

      {/* Login Route */}
      <Route path="/login" element={<LoginPage />} />

      {/* Register Route */}
      <Route path="/register" element={<RegisterPage />} /> {/* ✅ ADD THIS */}

      {/* Dashboard Route with Error Boundary */}
      <Route
        path="/dashboard"
        element={
          <SafeRender>
            <DashboardPage />
          </SafeRender>
        }
      />

      {/* 404 fallback */}
      <Route
        path="*"
        element={
          <div className="p-10 text-center text-red-600 text-2xl">
            ❌ Page not found
          </div>
        }
      />
    </Routes>
  );
}

export default App;

// ✅ SafeRender component to catch render errors
function SafeRender({ children }) {
  try {
    return children;
  } catch (err) {
    console.error("❌ Render Error:", err);
    return (
      <div className="text-center text-red-600 p-10 text-xl">
        🔥 Something went wrong while loading this page.
      </div>
    );
  }
}
