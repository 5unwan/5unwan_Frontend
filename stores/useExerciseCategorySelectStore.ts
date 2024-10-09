import { create } from "zustand";

interface BodyPartStateType {
  name: string;
  isChecked: boolean;
  id: number;
}

interface ExerciseCategorySelectStoreType {
  bodyPart: BodyPartStateType[];
  setBodyPart: (bodyPart: string) => void;
  selectedBodyPart: string;
}

export const useExerciseCategorySelectStore =
  create<ExerciseCategorySelectStoreType>((set) => ({
    bodyPart: [
      { name: "가슴", isChecked: false, id: 1 },
      { name: "등", isChecked: false, id: 2 },
      { name: "어깨", isChecked: false, id: 3 },
      { name: "하체", isChecked: false, id: 4 },
      { name: "팔", isChecked: false, id: 5 },
    ],
    setBodyPart: (bodyName: string) =>
      set((state) => {
        const bodyPartCopy = [...state.bodyPart];

        bodyPartCopy.forEach(({ name, isChecked }, index) => {
          if (isChecked) bodyPartCopy[index].isChecked = false;
          if (bodyName === name) {
            bodyPartCopy[index].isChecked = !bodyPartCopy[index].isChecked;
          }
        });

        const selectedBody =
          bodyPartCopy.find(({ isChecked }) => isChecked)?.name || "";

        return { bodyPart: bodyPartCopy, selectedBodyPart: selectedBody };
      }),
    selectedBodyPart: "",
  }));
