
import { useState } from "react";
import { ScheduleCard } from "@/components/ScheduleCard";
import { WeekTypeToggle } from "@/components/WeekTypeToggle";
import { useIsMobile } from "@/hooks/use-mobile";

const DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"] as const;
type Day = (typeof DAYS)[number];

const Schedule = () => {
  const [isNumerator, setIsNumerator] = useState(true);
  const [selectedDay, setSelectedDay] = useState<Day>("Пн");
  const isMobile = useIsMobile();

  // Schedule data structure
  const schedule = {
    "Пн": {
      numerator: [
        {
          time: "08:00-09:30",
          subject: "Практикум на ЭВМ по информатике",
          room: "213",
          type: "Практикум",
          teacher: "Адрианова А.М.",
        },
        {
          time: "09:45-11:15",
          subject: "Практикум на ЭВМ по информатике",
          room: "213",
          type: "Практикум",
          teacher: "Адрианова А.М.",
        },
        {
          time: "11:30-13:00",
          subject: "Технологическая (проектно-технологическая) практика (консультация)",
          room: "210",
          type: "Практика",
          teacher: "Ларина Ю.А.",
        },
      ],
      denominator: [
        {
          time: "11:30-13:00",
          subject: "Алгебра и геометрия",
          room: "214",
          type: "Лекция",
          teacher: "Седов А.Г.",
        },
        {
          time: "13:15-14:45",
          subject: "Алгебра и геометрия",
          room: "214",
          type: "Лекция",
          teacher: "Седов А.Г.",
        },
      ],
    },
    // Add other days similarly...
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
