
import { cn } from "@/lib/utils";

interface ScheduleCardProps {
  time: string;
  subject: string;
  room: string;
  type: string;
  teacher: string;
  className?: string;
}

export function ScheduleCard({ time, subject, room, type, teacher, className }: ScheduleCardProps) {
  return (
    <div className={cn(
      "p-4 bg-white rounded-xl shadow-sm border border-gray-100 transition-all duration-200 hover:shadow-md",
      className
    )}>
      <div className="text-sm font-medium text-indigo-600 mb-2">{time}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{subject}</h3>
      <div className="space-y-1 text-sm text-gray-600">
        <p>Аудитория: {room}</p>
        <p>{type}</p>
        <p>{teacher}</p>
      </div>
    </div>
  );
}
