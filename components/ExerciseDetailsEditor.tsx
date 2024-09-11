"use client";

import { ChangeEvent, useState } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ExerciseDetailsEditor() {
  const [exerciseDetails, setExerciseDetails] = useState([
    {
      set: 1,
      weight: "",
      reps: "",
    },
  ]);

  const handleClickAddSet = () => {
    setExerciseDetails((prev) => [
      ...prev,
      {
        set: prev.length + 1,
        weight: "",
        reps: "",
      },
    ]);
  };

  const handleChangeWeightAndReps = (
    event: ChangeEvent<HTMLInputElement>,
    detailType: "weight" | "reps",
    index: number,
  ) => {
    const exerciseDetailsCopy = [...exerciseDetails];
    exerciseDetailsCopy[index][detailType] = event.target.value;

    setExerciseDetails(exerciseDetailsCopy);
  };

  const handleClickDeleteSet = (index: number) => {
    const exerciseDetailsCopy = exerciseDetails.filter(
      (_, idx) => idx !== index,
    );

    setExerciseDetails(exerciseDetailsCopy);
  };

  return (
    <div className="w-full rounded-[10px] bg-primary-user p-3 text-third-text">
      <div className="flex flex-col items-center justify-center">
        {exerciseDetails.map(({ set, weight, reps }, index) => (
          <div key={`${set}-${index}`} className="flex items-center gap-3">
            <div className="flex w-14 justify-center font-bold">{set} 세트</div>
            <Input
              className="w-[90px] rounded-[10px] bg-third-bg text-right text-main-text"
              placeholder="kg"
              value={weight}
              onChange={(event) =>
                handleChangeWeightAndReps(event, "weight", index)
              }
            />
            <Input
              className="w-[90px] rounded-[10px] bg-third-bg text-right text-main-text"
              placeholder="회"
              value={reps}
              onChange={(event) =>
                handleChangeWeightAndReps(event, "reps", index)
              }
            />
            <X
              size={20}
              strokeWidth={2.5}
              onClick={() => handleClickDeleteSet(index)}
            />
          </div>
        ))}
      </div>
      <Button
        className="mt-2 h-[46px] w-full rounded-[10px] bg-third-bg"
        onClick={handleClickAddSet}
      >
        세트 추가
      </Button>
    </div>
  );
}
