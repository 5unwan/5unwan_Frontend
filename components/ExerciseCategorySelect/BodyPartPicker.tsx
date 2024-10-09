import { useState } from "react";
import { Heart } from "lucide-react";
import { useStorageStore } from "@/stores/useStorageStore";
import { cn } from "@/lib/utils";
import { useExerciseCategorySelectStore } from "@/stores/useExerciseCategorySelectStore";
import { Button } from "../ui/button";

interface BodyPartPickerProps {
  className?: string;
}

export default function BodyPartPicker({ className }: BodyPartPickerProps) {
  const userType = useStorageStore((state) => state.userType);
  const bodyPart = useExerciseCategorySelectStore((state) => state.bodyPart);
  const setBodyPart = useExerciseCategorySelectStore(
    (state) => state.setBodyPart,
  );
  const [isLiked, setIsLiked] = useState(false);

  const handleClickToggleIsLike = () => {
    setIsLiked((prev) => !prev);
  };

  const resolveColorByUserType = () => {
    return isLiked
      ? userType === "Trianer"
        ? "#5065ff"
        : "#d5ff76"
      : "#3e3e3e";
  };

  return (
    <div className={className}>
      <div className="flex items-center gap-1">
        <Button
          className="rounded-2xl bg-third-bg"
          onClick={handleClickToggleIsLike}
        >
          <Heart color="#9e9e9e" fill={resolveColorByUserType()} />
        </Button>
        {bodyPart.map(({ name, isChecked, id }) => (
          <Button
            key={id}
            className={cn(
              "rounded-2xl bg-third-bg",
              userType === "Trainer"
                ? `hover:bg-primary-trainer hover:text-third-text ${isChecked && "bg-primary-trainer text-third-text"}`
                : `hover:bg-primary-user hover:text-third-text ${isChecked && "bg-primary-user text-third-text"}`,
            )}
            onClick={() => setBodyPart(name)}
          >
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
}
