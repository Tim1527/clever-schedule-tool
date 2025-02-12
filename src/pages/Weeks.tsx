
import { useNavigate } from "react-router-dom";
import { format, isWithinInterval, parse } from "date-fns";
import { ru } from "date-fns/locale";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const numeratorWeeks = [
  "С 10-февр. по 16-февр.",
  "С 24-февр. по 2-мар.",
  "С 10-мар. по 16-мар.",
  "С 24-мар. по 30-мар.",
  "С 7-апр. по 13-апр.",
  "С 21-апр. по 27-апр.",
  "С 5-мая по 11-мая.",
  "С 19-мая по 25-мая.",
  "С 2-июн. по 8-июн.",
  "С 16-июн. по 22-июн.",
];

const denominatorWeeks = [
  "С 17-февр. по 23-февр.",
  "С 3-мар. по 9-мар.",
  "С 17-мар. по 23-мар.",
  "С 31-мар. по 6-апр.",
  "С 14-апр. по 20-апр.",
  "С 28-апр. по 4-мая.",
  "С 12-мая по 18-мая.",
  "С 26-мая по 1-июн.",
  "С 9-июн. по 15-июн.",
  "С 23-июн. по 29-июн.",
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
  const today = new Date();
  const formattedDate = format(today, "d MMMM", { locale: ru });

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
          {formattedDate}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Числитель</h2>
            <div className="space-y-4">
              {numeratorWeeks.map((week, index) => (
                <Card 
                  key={index}
                  className={cn(
                    isCurrentWeek(week) && "bg-blue-50 border-blue-200"
                  )}
                >
                  <CardContent className="pt-6">
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
                    isCurrentWeek(week) && "bg-blue-50 border-blue-200"
                  )}
                >
                  <CardContent className="pt-6">
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
