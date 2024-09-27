import { useState } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStorageStore } from "@/stores/useStorageStore";
import { Badge } from "../ui/badge";

interface SelectedExerciseTypeProps {
  className?: string;
}

export default function SelectedExerciseCategories({
  className,
}: SelectedExerciseTypeProps) {
  const userType = useStorageStore((state) => state.userType);
  const [DUMMY_DATA, setDUMMY_DATA] = useState([
    { exerciseType: "벤치프레스" },
    { exerciseType: "랫풀다운" },
    { exerciseType: "데드리프트" },
    { exerciseType: "스쿼트" },
    { exerciseType: "바벨로우" },
    { exerciseType: "레그프레스" },
  ]);

  const handleClickDeleteExercise = (exerciseName: string) => {
    setDUMMY_DATA(
      DUMMY_DATA.filter(({ exerciseType }) => exerciseType !== exerciseName),
    );
  };

  return (
    <div className={cn("flex max-w-full flex-col gap-2", className)}>
      <p>선택한 운동 종목</p>
      <div className="flex items-center gap-1 overflow-x-auto">
        {DUMMY_DATA.map(({ exerciseType }) => (
          <Badge
            className={cn(
              "gap-1 whitespace-nowrap rounded-xl bg-sub-bg px-3 py-2",
              userType === "Trainer"
                ? "hover:bg-primary-trainer hover:text-third-text"
                : "hover:bg-primary-user hover:text-third-text",
            )}
            key={exerciseType}
          >
            {exerciseType}
            <X
              size={16}
              onClick={() => handleClickDeleteExercise(exerciseType)}
            />
          </Badge>
        ))}
      </div>
    </div>
  );
}
