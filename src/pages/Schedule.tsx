 
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
          subject: "-",
          room: "-",
          type: "-",
          teacher: "-",
        },
        {
          time: "10:45-12:20",
          subject: "Философия",
          room: "203",
          type: "-",
          teacher: "Мусин М.З",
        },
        {
          time: "13:20-14:55",
          subject: "Иностранный язык",
          room: "305",
          type: "-",
          teacher: "Мастакова Н.К.",
        },
      ],
      denominator: [
       {
          time: "09:00-10:35",
          subject: "Деловое общение на русском языке",
          room: "312",
          type: "-",
          teacher: "Харлушина А.А.",
        },
        {
          time: "10:45-12:20",
          subject: "Математический анализ",
          room: "219",
          type: "-",
          teacher: "Ануфриенко М.В.",
        },
        {
          time: "13:20-14:55",
          subject: "Иностранный язык",
          room: "305",
          type: "Практика",
          teacher: "Мастакова Н.К.",
        },
      ],
    },
    "Вт": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "Практикум на ЭВМ по языкам программирования",
          room: "216",
          type: "-",
          teacher: "Адрианова А.М.",
        },
        {
          time: "10:45-12:20",
          subject: "Математический анализ",
          room: "215",
          type: "-",
          teacher: "Шабаршина Г.В.",
        },
        {
          time: "13:20-14:55",
          subject: "Философия",
          room: "215",
          type: "-",
          teacher: "Мусин М.З.",
        },
        {
          time: "15:05-16:40",
          subject: "консультация по Матанализу 09.09.25",
          room: "203",
          type: "Подготовка к пересдаче",
          teacher: "Шабаршина Г.В. ",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "Практикум на ЭВМ по языкам программирования",
          room: "216",
          type: "-",
          teacher: "Адрианова А.М.",
        },
        {
          time: "10:45-12:20",
          subject: "Математический анализ",
          room: "215",
          type: "-",
          teacher: "Шабаршина Г.В.",
        },
        {
          time: "13:20-14:55",
          subject: "Философия",
          room: "215",
          type: "-",
          teacher: "Мусин М.З.",
        },
        {
          time: "15:05-16:40",
          subject: "консультация по Матанализу 09.09.25",
          room: "203",
          type: "Подготовка к пересдаче",
          teacher: "Шабаршина Г.В. ",
        },
      ],
    },
    "Ср": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "Математический анализ",
          room: "219",
          type: "-",
          teacher: "Ануфриенко М.В.",
        },
        {
          time: "10:45-12:20",
          subject: "Операционные системы ",
          room: "221",
          type: "-",
          teacher: "Васильев А.М.",
        },
        {
          time: "13:20-14:55",
          subject: "Объектно-ориентированное программирование",
          room: "215",
          type: "-",
          teacher: "Лагутина Н.С.",
        },
        {
          time: "15:05-16:40",
          subject: "Операционные системы",
          room: "221",
          type: "-",
          teacher: "Васильев А.М.",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "Математический анализ",
          room: "219",
          type: "-",
          teacher: "Ануфриенко М.В.",
        },
        {
          time: "10:45-12:20",
          subject: "Операционные системы ",
          room: "221",
          type: "-",
          teacher: "Васильев А.М.",
        },
        {
          time: "13:20-14:55",
          subject: "Объектно-ориентированное программирование",
          room: "215",
          type: "-",
          teacher: "Лагутина Н.С.",
        },
      ],
    },
    "Чт": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "Основы веб-технологий / Спортивное программирование ",
          room: "216 / 210",
          type: "-",
          teacher: "Лавровский В.А. / Шовгенов Д.А.",
        },
        {
          time: "10:45-12:20",
          subject: "Математическая логика и теория алгоритмов",
          room: "215",
          type: "-",
          teacher: "Тимофеев Е.А.",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "Основы веб-технологий / Спортивное программирование ",
          room: "216 / 210",
          type: "-",
          teacher: "Лавровский В.А. / Шовгенов Д.А.",
        },
        {
          time: "10:45-12:20",
          subject: "Математическая логика и теория алгоритмов",
          room: "215",
          type: "-",
          teacher: "Тимофеев Е.А.",
        },
      ],
    },
    "Пт": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "-",
          room: "-",
          type: "-",
          teacher: "-",
        },
        {
          time: "10:45-12:20",
          subject: "Прикладная физическая культура",
          room: "Лес",
          type: "-",
          teacher: "-",
        },
        {
          time: "13:20-14:55",
          subject: "Математическая логика и теория алгоритмов",
          room: "226",
          type: "-",
          teacher: "Тимофеев Е.А.",
        },
        {
          time: "15:05-16:40",
          subject: "Деловое общение на русском языке",
          room: "312",
          type: "-",
          teacher: "Елисеева А.А.",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "-",
          room: "-",
          type: "-",
          teacher: "-",
        },
        {
          time: "10:45-12:20",
          subject: "Прикладная физическая культура",
          room: "Лес",
          type: "-",
          teacher: "-",
        },
        {
          time: "13:20-14:55",
          subject: "Математическая логика и теория алгоритмов",
          room: "226",
          type: "-",
          teacher: "Тимофеев Е.А.",
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
