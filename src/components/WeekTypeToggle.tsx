
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface WeekTypeToggleProps {
  isNumerator: boolean;
  onChange: (value: boolean) => void;
}

export function WeekTypeToggle({ isNumerator, onChange }: WeekTypeToggleProps) {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <div className={`text-sm font-medium ${!isNumerator ? 'text-indigo-600' : 'text-gray-500'}`}>
        Знаменатель
      </div>
      <Switch
        checked={isNumerator}
        onCheckedChange={onChange}
      />
      <div className={`text-sm font-medium ${isNumerator ? 'text-indigo-600' : 'text-gray-500'}`}>
        Числитель
      </div>
    </div>
  );
}
