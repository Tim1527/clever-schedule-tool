
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
        {
          time: "13:30-13:05",
          subject: "Алгебра и геометрия",
          room: "214",
          type: "Лекция",
          teacher: "Седов А.Г.",
        },
        {
          time: "15:05-16:40",
          subject: "Алгебра и геометрия",
          room: "214",
          type: "Лекция",
          teacher: "Седов А.Г.",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "Практикум на ЭВМ по информатике",
          room: "213",
          type: "Практикум",
          teacher: "Адрианова А.М.",
        },
        {
          time: "10:45-12:20",
          subject: "Практикум на ЭВМ по информатике",
          room: "213",
          type: "Практикум",
          teacher: "Адрианова А.М.",
        },
        {
          time: "13:30-13:05",
          subject: "Технологическая (проектно-технологическая) практика (консультация)",
          room: "210",
          type: "Практика",
          teacher: "Ларина Ю.А.",
        },
      ],
    },
    "Вт": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "История России с XIX века",
          room: "224",
          type: "Лекция",
          teacher: "Смирнов Я.А.",
        },
        {
          time: "10:45-12:20",
          subject: "Информатика",
          room: "220",
          type: "Лекция",
          teacher: "Лагутина Н.С.",
        },
        {
          time: "13:30-13:05",
          subject: "Математический анализ",
          room: "220",
          type: "Лекция",
          teacher: "Шабаршина Г.В.",
        },
        {
          time: "15:05-16:40",
          subject: "Физика",
          room: "224",
          type: "Лекция",
          teacher: "Мелесов Н.С.",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "История России с XIX века",
          room: "224",
          type: "Лекция",
          teacher: "Смирнов Я.А.",
        },
        {
          time: "10:45-12:20",
          subject: "Информатика",
          room: "220",
          type: "Лекция",
          teacher: "Лагутина Н.С.",
        },
        {
          time: "13:30-13:05",
          subject: "Математический анализ",
          room: "220",
          type: "Лекция",
          teacher: "Шабаршина Г.В.",
        },
        {
          time: "15:05-16:40",
          subject: "Физика",
          room: "224",
          type: "Лекция",
          teacher: "Мелесов Н.С.",
        },
        {
          time: "16:50-18:25",
          subject: "Физика",
          room: "224",
          type: "Лекция",
          teacher: "Мелесов Н.С.",
        },
      ],
    },
    "Ср": {
      numerator: [
        {
          time: "10:45-12:20",
          subject: "Прикладная физическая культура",
          room: "",
          type: "",
          teacher: "",
        },
        {
          time: "13:30-13:05",
          subject: "История России с XIX века",
          room: "215",
          type: "Лекция",
          teacher: "Смирнов Я.А.",
        },
      ],
      denominator: [
        {
          time: "10:45-12:20",
          subject: "Прикладная физическая культура",
          room: "",
          type: "",
          teacher: "",
        },
        {
          time: "13:30-13:05",
          subject: "История России с XIX века",
          room: "215",
          type: "Лекция",
          teacher: "Смирнов Я.А.",
        },
      ],
    },
    "Чт": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "Английский по уровню знаний",
          room: "306, 416, 305",
          type: "Практикум",
          teacher: "Москалева Н.В., Титова Л.А., Мастакова Н.К.",
        },
        {
          time: "10:45-12:20",
          subject: "Математический анализ",
          room: "220",
          type: "Лекция",
          teacher: "Шабаршина Г.В.",
        },
        {
          time: "13:30-13:05",
          subject: "Алгебра и геометрия",
          room: "215",
          type: "Лекция",
          teacher: "Седов А.Г.",
        },
        {
          time: "15:05-16:40",
          subject: "Алгебра и геометрия",
          room: "207",
          type: "Лекция",
          teacher: "Седов А.Г.",
        },
        {
          time: "16:50-18:25",
          subject: "Архитектура вычислительных систем",
          room: "203",
          type: "Лекция",
          teacher: "Сажин С.В.",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "Английский по уровню знаний",
          room: "306, 416, 305",
          type: "Практикум",
          teacher: "Москалева Н.В., Титова Л.А., Мастакова Н.К.",
        },
        {
          time: "10:45-12:20",
          subject: "Дискретная математика",
          room: "220",
          type: "Лекция",
          teacher: "Смирнов А.В.",
        },
        {
          time: "13:30-13:05",
          subject: "Алгебра и геометрия",
          room: "215",
          type: "Лекция",
          teacher: "Седов А.Г.",
        },
        {
          time: "15:05-16:40",
          subject: "Алгебра и геометрия",
          room: "207",
          type: "Лекция",
          teacher: "Седов А.Г.",
        },
        {
          time: "16:50-18:25",
          subject: "Архитектура вычислительных систем",
          room: "203",
          type: "Лекция",
          teacher: "Сажин С.В.",
        },
      ],
    },
    "Пт": {
      numerator: [
        {
          time: "09:00-10:35",
          subject: "Прикладная физическая культура",
          room: "",
          type: "",
          teacher: "",
        },
        {
          time: "10:45-12:20",
          subject: "Дискретная математика",
          room: "203",
          type: "Лекция",
          teacher: "Смирнов А.В.",
        },
        {
          time: "13:30-13:05",
          subject: "Математический анализ",
          room: "304",
          type: "Лекция",
          teacher: "Ануфриенко М.В.",
        },
        {
          time: "15:05-16:40",
          subject: "Дискретная математика",
          room: "203",
          type: "Лекция",
          teacher: "Смирнов А.В.",
        },
        {
          time: "16:50-18:25",
          subject: "Архитектура вычислительных систем",
          room: "220",
          type: "Лекция",
          teacher: "Сажин С.В.",
        },
      ],
      denominator: [
        {
          time: "09:00-10:35",
          subject: "Прикладная физическая культура",
          room: "",
          type: "",
          teacher: "",
        },
        {
          time: "10:45-12:20",
          subject: "Дискретная математика",
          room: "203",
          type: "Лекция",
          teacher: "Смирнов А.В.",
        },
        {
          time: "13:30-13:05",
          subject: "Математический анализ",
          room: "304",
          type: "Лекция",
          teacher: "Ануфриенко М.В.",
        },
        {
          time: "15:05-16:40",
          subject: "Математический анализ",
          room: "304",
          type: "Лекция",
          teacher: "Ануфриенко М.В.",
        },
        {
          time: "16:50-18:25",
          subject: "Архитектура вычислительных систем",
          room: "220",
          type: "Лекция",
          teacher: "Сажин С.В.",
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
          ↚На главную
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
