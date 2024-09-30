"use client";
import { useStorageStore } from "@/stores/useStorageStore";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { SearchBar as ExerciseSearchBar } from "../SearchBar";
import BodyPartPicker from "./BodyPartPicker";
import ExerciseList from "./ExerciseList";
import Header from "./Header";
import SelectedExerciseCategories from "./SelectedExerciseCategories";

interface ExerciseCategorySelectProps {
  className?: string;
  setClose: () => void;
}

export default function ExerciseCategorySelect({
  className,
  setClose,
}: ExerciseCategorySelectProps) {
  const userType = useStorageStore((state) => state.userType);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 flex h-auto w-full flex-col items-center gap-10 overflow-y-auto rounded-t-[50px] bg-[#252525] p-4",
        className,
      )}
    >
      <Header setClose={setClose} />
      <ExerciseSearchBar placeholder="운동 종목을 검색해보세요!" />
      <BodyPartPicker className="self-start" />
      <SelectedExerciseCategories className="self-start" />
      <ExerciseList />
      <Button
        className={cn(
          "h-14 w-40 rounded-[20px]",
          userType === "Trainer"
            ? "bg-primary-trainer text-third-text"
            : "bg-primary-user text-third-text",
        )}
      >
        저장
      </Button>
    </div>
  );
}
