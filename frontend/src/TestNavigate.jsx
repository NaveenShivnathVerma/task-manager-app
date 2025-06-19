import { useNavigate } from "react-router-dom";

const TestNavigate = () => {
  const navigate = useNavigate();

  return (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold mb-4">Test Navigation Page</h1>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => {
          console.log("Navigate clicked ✅");
          navigate("/dashboard");
        }}
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default TestNavigate;
