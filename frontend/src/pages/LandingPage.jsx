import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const LandingPage = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
        Welcome to Task Manager
      </h1>

      <button
        onClick={() => {
          if (token) {
            navigate("/dashboard");
          } else {
            alert("Please login first to access Dashboard.");
          }
        }}
        className="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        Go to Dashboard
      </button>

      <p className="text-sm mt-4 text-center">
        Already have an account?{" "}
        <a href="/login" className="text-blue-600 underline">
          Login here
        </a>
      </p>
    </div>
  );
};

export default LandingPage;
