import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
  setClose: () => void;
}

export default function Header({ className, setClose }: HeaderProps) {
  const handleClickCloseExerciseCategorySelect = () => {
    setClose();
  };

  return (
    <div
      className={cn(
        "relative flex w-full items-center justify-center font-bold",
        className,
      )}
    >
      <p className="text-xl">운동 추가</p>
      <X
        size={32}
        className="absolute right-3"
        onClick={handleClickCloseExerciseCategorySelect}
      />
    </div>
  );
}
