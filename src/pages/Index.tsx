
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 -mt-32">
      <h1 className="text-5xl font-bold text-gray-900 mb-8 animate-in fade-in slide-in-from-bottom duration-700">
        Расписание
      </h1>
      <div className="space-y-4">
        <button
          onClick={() => navigate("/schedule")}
          className="w-full px-6 py-3 text-lg font-medium text-white bg-black rounded-lg shadow-sm hover:bg-gray-900 transition-colors duration-200 animate-in fade-in slide-in-from-bottom duration-700 delay-150"
        >
          Занятия ИТ-11
        </button>
        <button
          onClick={() => navigate("/schedule-it12")}
          className="w-full px-6 py-3 text-lg font-medium text-white bg-black rounded-lg shadow-sm hover:bg-gray-900 transition-colors duration-200 animate-in fade-in slide-in-from-bottom duration-700 delay-300"
        >
          Занятия ИТ-12
        </button>
        <button
          onClick={() => navigate("/weeks")}
          className="w-full px-6 py-3 text-lg font-medium text-white bg-black rounded-lg shadow-sm hover:bg-gray-900 transition-colors duration-200 animate-in fade-in slide-in-from-bottom duration-700 delay-450"
        >
          Числители / Знаменатели
        </button>
      </div>
    </div>
  );
};

export default Index;
