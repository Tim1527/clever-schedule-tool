
import { useNavigate } from "react-router-dom";
import { format, isWithinInterval, parse } from "date-fns";
import { ru } from "date-fns/locale";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const numeratorWeeks = [
  "С 16-февр. по 22-февр.",
  "С 2-мар. по 8-мар.",
  "С 16-мар. по 22-мар.",
  "С 30-мар. по 5-апр.",
  "С 13-апр. по 19-апр.",
  "С 27-апр. по 3-мая",
  "С 11-мая по 17-мая",
  "С 25-мая по 31-мая",
  "С 8-июн. по 14-июн."
];

const denominatorWeeks = [
  "С 9-февр. по 15-февр.",
  "С 23-февр. по 1-мар.",
  "С 9-мар. по 15-мар.",
  "С 23-мар. по 29-мар.",
  "С 6-апр. по 12-апр.",
  "С 20-апр. по 26-апр.",
  "С 4-мая по 10-мая",
  "С 18-мая по 24-мая",
  "С 1-июн. по 7-июн.",
  "С 15-июн. по 21-июн."
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
