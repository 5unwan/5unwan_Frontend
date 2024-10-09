import { useState } from "react";
import { useExerciseCategorySelectStore } from "@/stores/useExerciseCategorySelectStore";
import ExcerciseItem from "./ExcerciseItem";

export default function ExerciseList() {
  const selectedBodyPart = useExerciseCategorySelectStore(
    (state) => state.selectedBodyPart,
  );
  const [excercises, setExcercises] = useState<string[]>([]);
  const DYMMY_FAVORITE = [0, 2];
  const DUMMY_DATA = [
    {
      id: 0,
      name: "벤치 프레스",
    },
    {
      id: 1,
      name: "덤벨 벤치 프레스",
    },
    {
      id: 2,
      name: "덤벨 풀오버",
    },
    {
      id: 3,
      name: "펙덱 플라이",
    },
    {
      id: 4,
      name: "푸쉬엄",
    },
  ];

  const handleClickSetExcercise = (name: string) => {
    setExcercises((previousData) => {
      if (previousData.includes(name)) {
        return previousData.filter((excercise) => excercise !== name);
      } else {
        return [...previousData, name];
      }
    });
  };

  return (
    <div className="flex h-80 w-full flex-col items-center gap-1 overflow-y-auto">
      <p className="mb-1 w-full font-bold">{selectedBodyPart}</p>
      {DUMMY_DATA.map(({ id, name }) => (
        <ExcerciseItem
          key={id}
          excercise={name}
          favorite={DYMMY_FAVORITE.includes(id)}
          select={excercises.includes(name)}
          onClickSetExcercise={handleClickSetExcercise}
        />
      ))}
    </div>
  );
}
