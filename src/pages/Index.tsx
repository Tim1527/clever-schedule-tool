
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-900 mb-8 animate-in fade-in slide-in-from-bottom duration-700">
        Расписание
      </h1>
      <button
        onClick={() => navigate("/schedule")}
        className="px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 transition-colors duration-200 animate-in fade-in slide-in-from-bottom duration-700 delay-150"
      >
        Расписание занятий
      </button>
    </div>
  );
};

export default Index;
