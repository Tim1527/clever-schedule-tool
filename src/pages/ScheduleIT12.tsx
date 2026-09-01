
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScheduleCard } from "@/components/ScheduleCard";
import { WeekTypeToggle } from "@/components/WeekTypeToggle";
import { useIsMobile } from "@/hooks/use-mobile";

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"] as const;
type Day = (typeof DAYS)[number];

const ScheduleIT12 = () => {
  const navigate = useNavigate();
  const [isNumerator, setIsNumerator] = useState(true);
  const [selectedDay, setSelectedDay] = useState<Day>("Пн");
  const isMobile = useIsMobile();

  const schedule = {
  "Пн": {
    numerator: [
      { time: "09:00-10:35", subject: "Методы оптимизации", room: "304", type: "-", teacher: "Легков" },
      { time: "10:45-12:20", subject: "Теория автоматов", room: "226", type: "-", teacher: "Гладков" },
      { time: "13:20-14:55", subject: "Методы оптимизации", room: "224", type: "-", teacher: "Легков" },
      { time: "15:05-16:40", subject: "Фундаментальные алгоритмы программирования (по выбору)", room: "207", type: "-", teacher: "Тимофеев" },
    ],
    denominator: [
      { time: "09:00-10:35", subject: "Методы оптимизации", room: "304", type: "-", teacher: "Легков" },
      { time: "10:45-12:20", subject: "Теория автоматов", room: "226", type: "-", teacher: "Гладков" },
      { time: "13:20-14:55", subject: "Методы оптимизации", room: "224", type: "-", teacher: "Легков" },
      { time: "15:05-16:40", subject: "Фундаментальные алгоритмы программирования (по выбору)", room: "207", type: "-", teacher: "Тимофеев" },
    ],
  },
  "Вт": {
    numerator: [
      { time: "09:00-10:35", subject: "-", room: "-", type: "-", teacher: "-" },
      { time: "10:45-12:20", subject: "-", room: "-", type: "-", teacher: "-" },
      { time: "13:20-14:55", subject: "Введение в пром разработку (по выбору)", room: "223", type: "-", teacher: "Полетаев" },
    ],
    denominator: [
      { time: "09:00-10:35", subject: "-", room: "-", type: "-", teacher: "-" },
      { time: "10:45-12:20", subject: "Сетевые технологии Хуавей", room: "201", type: "-", teacher: "Корсаков" },
      { time: "13:20-14:55", subject: "Введение в пром разработку (по выбору)", room: "223", type: "-", teacher: "Полетаев" },
    ],
  },
  "Ср": {
    numerator: [
      { time: "09:00-10:35", subject: "Теория автоматов", room: "312", type: "-", teacher: "Кузьмин" },
      { time: "10:45-12:20", subject: "Физра", room: "-", type: "-", teacher: "-" },
      { time: "13:20-14:55", subject: "Пром разработка (Котлин)", room: "223", type: "-", teacher: "Васильев" },
      { time: "15:05-16:40", subject: "Введение в пром разработку (по выбору)", room: "220", type: "-", teacher: "Парамонов" },
    ],
    denominator: [
      { time: "09:00-10:35", subject: "Теория автоматов", room: "312", type: "-", teacher: "Кузьмин" },
      { time: "10:45-12:20", subject: "Физра", room: "-", type: "-", teacher: "-" },
      { time: "13:20-14:55", subject: "Пром разработка (Котлин)", room: "223", type: "-", teacher: "Васильев" },
      { time: "15:05-16:40", subject: "Введение в пром разработку (по выбору)", room: "220", type: "-", teacher: "Парамонов" },
    ],
  },

  "Чт": {
    numerator: [
      { time: "09:00-10:35", subject: "ASP.NET (по выбору)", room: "210", type: "-", teacher: "Васильчиков" },
      { time: "10:45-12:20", subject: "Пром разработка (Котлин)", room: "223", type: "-", teacher: "Васильев" },
      { time: "13:20-14:55", subject: "БЖД", room: "410", type: "-", teacher: "Зеркалина" },
    ],
    denominator: [
      { time: "09:00-10:35", subject: "ASP.NET (по выбору)", room: "210", type: "-", teacher: "Васильчиков" },
      { time: "10:45-12:20", subject: "Пром разработка (Котлин)", room: "223", type: "-", teacher: "Васильев" },
      { time: "13:20-14:55", subject: "БЖД", room: "410", type: "-", teacher: "Зеркалина" },
      { time: "15:05-16:40", subject: "Сетевые технологии Хуавей", room: "220", type: "-", teacher: "Корсаков" },
    ],
  },

    "Пт": {
    numerator: [],
    denominator: [],
    },
    
  "Сб": {
    numerator: [
      { time: "09:00-10:35", subject: "Рекурсивно-логическое программирование (по выбору) / Основы тестирования веб-приложений", room: "301 / БИФИТ онлайн", type: "-", teacher: "Башкин" },
      { time: "10:45-12:20", subject: "Рекурсивно-логическое программирование (по выбору) / Основы тестирования веб-приложений", room: "301 / БИФИТ онлайн", type: "-", teacher: "Башкин" },
      { time: "13:20-14:55", subject: "Базы данных", room: "216", type: "-", teacher: "Горбунов" },
      { time: "15:05-16:40", subject: "Базы данных", room: "216", type: "-", teacher: "Горбунов" },
    ],
    denominator: [
      { time: "09:00-10:35", subject: "-", room: "-", type: "-", teacher: "-" },
      { time: "10:45-12:20", subject: "Рекурсивно-логическое программирование (по выбору) / Основы тестирования веб-приложений", room: "301 / БИФИТ онлайн", type: "-", teacher: "Башкин" },
      { time: "13:20-14:55", subject: "Базы данных", room: "216", type: "-", teacher: "Горбунов" },
      { time: "15:05-16:40", subject: "Базы данных", room: "216", type: "-", teacher: "Горбунов" },
    ],
  },

    
  };

  
  const renderSchedule = (day: Day) => {
    const daySchedule = schedule[day]?.[isNumerator ? "numerator" : "denominator"] || [];
    return daySchedule.map((lesson, index) => (
      <ScheduleCard
        key={`${day}-${index}`}
        {...lesson}
        className="mb-4"
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-6 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200"
        >
          ←На главную
        </button>
        
        <WeekTypeToggle isNumerator={isNumerator} onChange={setIsNumerator} />
        
        {isMobile ? (
          <>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {DAYS.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200 ${
                    selectedDay === day
                      ? "bg-indigo-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
            <div className="animate-in fade-in slide-in-from-bottom duration-300">
              {renderSchedule(selectedDay)}
            </div>
          </>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {DAYS.map((day) => (
              <div key={day} className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{day}</h2>
                {renderSchedule(day)}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScheduleIT12;
