 
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScheduleCard } from "@/components/ScheduleCard";
import { WeekTypeToggle } from "@/components/WeekTypeToggle";
import { useIsMobile } from "@/hooks/use-mobile";

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"] as const;
type Day = (typeof DAYS)[number];

const Schedule = () => {
  const navigate = useNavigate();
  const [isNumerator, setIsNumerator] = useState(true);
  const [selectedDay, setSelectedDay] = useState<Day>("Пн");
  const isMobile = useIsMobile();

  // Schedule data structure
  const schedule = {
    "Пн": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "Теория вероятностей и математическая статистика",
          room: "214",
          type: "-",
          teacher: "Седов А.Г.",
        },
        {
          time: "10:45-12:20",
          subject: "Компьютерные сети",
          room: "215",
          type: "-",
          teacher: "Коновалов Е.В.",
        },
        {
          time: "13:20-14:55",
          subject: "Компьютерные сети",
          room: "224",
          type: "-",
          teacher: "Коновалов Е.В.",
        },
       {
          time: "15:05-16:40",
          subject: "Иностранный язык",
          room: "305",
          type: "-",
          teacher: "Мастакова Н.К.",
        },
      ],
      denominator: [
       {
          time: "09:00-10:35",
          subject: "Теория вероятностей и математическая статистика",
          room: "214",
          type: "-",
          teacher: "Седов А.Г.",
        },
        {
          time: "10:45-12:20",
          subject: "Алгоритмы и анализ сложности",
          room: "215",
          type: "-",
          teacher: "Тимофеев Е.А.",
        },
        {
          time: "13:20-14:55",
          subject: "Компьютерные сети",
          room: "224",
          type: "-",
          teacher: "Коновалов Е.В.",
        },
       {
          time: "15:05-16:40",
          subject: "Иностранный язык",
          room: "305",
          type: "-",
          teacher: "Мастакова Н.К.",
        },
      ],
    },
    "Вт": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "Пить пиво",
          room: "-",
          type: "-",
          teacher: "-",
        },
        {
          time: "10:45-12:20",
          subject: "Теория вероятностей и математическая статистика",
          room: "219",
          type: "-",
          teacher: "Богомолов Ю.В.",
        },
        {
          time: "13:20-14:55",
          subject: "Языки и методы программирования",
          room: "220",
          type: "-",
          teacher: "Лагутина К.В.",
        },
        {
          time: "15:05-16:40",
          subject: "Языки и методы программирования",
          room: "210",
          type: "-",
          teacher: "Лагутина К.В.",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "Пить пиво",
          room: "-",
          type: "-",
          teacher: "-",
        },
        {
          time: "10:45-12:20",
          subject: "Теория вероятностей и математическая статистика",
          room: "219",
          type: "-",
          teacher: "Богомолов Ю.В.",
        },
        {
          time: "13:20-14:55",
          subject: "Языки и методы программирования",
          room: "220",
          type: "-",
          teacher: "Лагутина К.В.",
        },
        {
          time: "15:05-16:40",
          subject: "Языки и методы программирования",
          room: "210",
          type: "-",
          teacher: "Лагутина К.В.",
        },
      ],
    },
    "Ср": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "Дифференциальные уравнения",
          room: "312",
          type: "-",
          teacher: "Глызин С.Д.",
        },
        {
          time: "10:45-12:20",
          subject: "Программирование для .NET Framework",
          room: "210",
          type: "-",
          teacher: "Васильчиков В.В.",
        },
        {
          time: "13:20-14:55",
          subject: "Программирование для .NET Framework",
          room: "210",
          type: "-",
          teacher: "Васильчиков В.В.",
        },
        {
          time: "15:05-16:40",
          subject: "Основы тестирования программного обеспечения",
          room: "221",
          type: "Курс по выбору",
          teacher: "Полетаев А.Ю.",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "Дифференциальные уравнения",
          room: "312",
          type: "-",
          teacher: "Глызин С.Д.",
        },
        {
          time: "10:45-12:20",
          subject: "Программирование для .NET Framework",
          room: "210",
          type: "-",
          teacher: "Васильчиков В.В.",
        },
        {
          time: "13:20-14:55",
          subject: "Программирование для .NET Framework",
          room: "210",
          type: "-",
          teacher: "Васильчиков В.В.",
        },
        {
          time: "15:05-16:40",
          subject: "Основы тестирования программного обеспечения",
          room: "221",
          type: "к/в",
          teacher: "Полетаев А.Ю.",
        },
      ],
    },
    "Чт": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "Алгоритмы и анализ сложности",
          room: "224",
          type: "-",
          teacher: "Тимофеев Е.А.",
        },
        {
          time: "10:45-12:20",
          subject: "Алгоритмы и анализ сложности",
          room: "224",
          type: "-",
          teacher: "Тимофеев Е.А.",
        },
       {
          time: "12:30-14:05",
          subject: "Дифференциальные уравнения",
          room: "226",
          type: "БЕЗ ПЕРЕРЫВА",
          teacher: "Толбей А.О.",
        },
       {
          time: "15:05-16:40",
          subject: "Основы тестирования программного обеспечения",
          room: "215",
          type: "к/в -1 | до 05.04",
          teacher: "Парамонов И.В.",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "Пить пиво",
          room: "-",
          type: "-",
          teacher: "-",
        },
        {
          time: "10:45-12:20",
          subject: "Алгоритмы и анализ сложности",
          room: "224",
          type: "-",
          teacher: "Тимофеев Е.А.",
        },
       {
          time: "12:30-14:05",
          subject: "Дифференциальные уравнения",
          room: "226",
          type: "БЕЗ ПЕРЕРЫВА",
          teacher: "Толбей А.О.",
        },
       {
          time: "15:05-16:40",
          subject: "Основы тестирования программного обеспечения",
          room: "215",
          type: "к/в -1 | до 05.04",
          teacher: "Парамонов И.В.",
        },
      ],
    },
    "Пт": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "Прикладная физическая культура",
          room: "Лес",
          type: "-",
          teacher: "-",
        },
        {
          time: "10:45-12:20",
          subject: "Социальные и этические вопросы информационных технологий",
          room: "301",
          type: "-",
          teacher: "Карамышев И.С.",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "Прикладная физическая культура",
          room: "Лес",
          type: "-",
          teacher: "-",
        },
        {
          time: "10:45-12:20",
          subject: "Социальные и этические вопросы информационных технологий",
          room: "301",
          type: "-",
          teacher: "Карамышев И.С.",
        },
      ],
    },
    "Сб": {
      numerator: [],
      denominator: [],
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

export default Schedule;
