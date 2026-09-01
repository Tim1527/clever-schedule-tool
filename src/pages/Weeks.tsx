
import { useNavigate } from "react-router-dom";
import { format, isWithinInterval, parse } from "date-fns";
import { ru } from "date-fns/locale";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const numeratorWeeks = [
  "С 31-авг. по 6-сен.",
  "С 14-сен. по 20-сен.",
  "С 28-сен. по 4-окт.",
  "С 12-окт. по 18-окт.",
  "С 26-окт. по 1-ноя.",
  "С 9-ноя. по 15-ноя.",
  "С 23-ноя. по 29-ноя.",
  "С 7-дек. по 13-дек.",
  "С 21-дек. по 27-дек.",
  "С 4-янв. по 10-янв."
];

const denominatorWeeks = [
  "С 7-сен. по 13-сен.",
  "С 21-сен. по 27-сен.",
  "С 5-окт. по 11-окт.",
  "С 19-окт. по 25-окт.",
  "С 2-ноя. по 8-ноя.",
  "С 16-ноя. по 22-ноя.",
  "С 30-ноя. по 6-дек.",
  "С 14-дек. по 20-дек.",
  "С 28-дек. по 3-янв.",
  "С 11-янв. по 17-янв."
];


const parseDate = (dateStr: string) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth(); // 0-11
  
  const [start, end] = dateStr.replace("С ", "").replace(/\./g, "").split(" по ");
  
  // Определяем год для каждой даты
  const getYearForDate = (dateStr: string) => {
    const monthNames: { [key: string]: number } = {
      'янв': 0, 'февр': 1, 'мар': 2, 'апр': 3, 'мая': 4, 'июн': 5,
      'июля': 6, 'авг': 7, 'сент': 8, 'окт': 9, 'нояб': 10, 'дек': 11
    };
    
    const monthStr = dateStr.split('-')[1];
    const monthIndex = monthNames[monthStr];
    
    // Если месяц январь-май и текущий месяц август-декабрь, то это следующий год
    if (monthIndex <= 4 && currentMonth >= 7) {
      return currentYear + 1;
    }
    // Если месяц сентябрь-декабрь и текущий месяц январь-май, то это предыдущий год  
    if (monthIndex >= 8 && currentMonth <= 4) {
      return currentYear - 1;
    }
    return currentYear;
  };
  
  const startYear = getYearForDate(start);
  const endYear = getYearForDate(end);
  
  const startDate = parse(start + " " + startYear, "d-MMM yyyy", new Date(), { locale: ru });
  const endDate = parse(end + " " + endYear, "d-MMM yyyy", new Date(), { locale: ru });
  
  return { startDate, endDate };
};

const isCurrentWeek = (weekStr: string) => {
  try {
    const today = new Date();
    const { startDate, endDate } = parseDate(weekStr);
    return isWithinInterval(today, { start: startDate, end: endDate });
  } catch (error) {
    console.error("Error parsing date:", error);
    return false;
  }
};

const Weeks = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = format(currentTime, "d MMMM", { locale: ru });
  const formattedTime = format(currentTime, "HH:mm:ss");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-6 px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200"
        >
          ←На главную
        </button>

        <div className="text-2xl font-medium text-gray-900 mb-8">
          {formattedDate} {formattedTime}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Числитель</h2>
            <div className="space-y-4">
              {numeratorWeeks.map((week, index) => (
                <Card 
                  key={index}
                  className={cn(
                    "transition-colors duration-200",
                    isCurrentWeek(week) 
                      ? "bg-blue-600 border-blue-700" 
                      : "bg-white"
                  )}
                >
                  <CardContent className={cn(
                    "pt-6",
                    isCurrentWeek(week) ? "text-white" : "text-gray-900"
                  )}>
                    {week}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Знаменатель</h2>
            <div className="space-y-4">
              {denominatorWeeks.map((week, index) => (
                <Card 
                  key={index}
                  className={cn(
                    "transition-colors duration-200",
                    isCurrentWeek(week) 
                      ? "bg-blue-600 border-blue-700" 
                      : "bg-white"
                  )}
                >
                  <CardContent className={cn(
                    "pt-6",
                    isCurrentWeek(week) ? "text-white" : "text-gray-900"
                  )}>
                    {week}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weeks;
