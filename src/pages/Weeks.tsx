
import { useNavigate } from "react-router-dom";
import { format, isWithinInterval, parse } from "date-fns";
import { ru } from "date-fns/locale";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const numeratorWeeks = [
  "С 1-сент. по 7-сент."
  "С 15-сент. по 21-сент.",
  "С 29-сент. по 5-окт.",
  "С 13-окт. по 19-окт.",
  "С 27-окт. по 2-нояб.",
  "С 10-нояб. по 16-нояб.",
  "С 24-нояб. по 30-нояб.",
  "С 8-дек. по 14-дек.",
  "С 22-дек. по 28-дек.",
  "С 5-янв. по 11-янв.",
];

const denominatorWeeks = [
  "С 8-сент. по 14-сент.",
  "С 22-сент. по 28-сент.",
  "С 6-окт. по 12-окт.",
  "С 20-окт. по 26-окт.",
  "С 3-нояб. по 9-нояб.",
  "С 17-нояб. по 23-нояб.",
  "С 1-дек. по 7-дек.",
  "С 15-дек. по 21-дек.",
  "С 29-дек. по 4-янв.",
  "С 12-янв. 18-янв.",
  
];

const parseDate = (dateStr: string) => {
  const year = new Date().getFullYear();
  const [start, end] = dateStr.replace("С ", "").replace(".", "").split(" по ");
  const startDate = parse(start + " " + year, "d-MMM yyyy", new Date(), { locale: ru });
  const endDate = parse(end + " " + year, "d-MMM yyyy", new Date(), { locale: ru });
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
