import { create } from "zustand";
import BodyInformation from "@/app/(user)/user-information/_components/BodyInformation";
import ExercisePurpose from "@/app/(user)/user-information/_components/ExercisePurpose";

interface ExercisePruposeType {
  purpose: string;
  isCheck: boolean;
}

interface BodyInformationType {
  labelName: string;
  inputType?: "date" | "text";
  unit?: string;
  value: string;
}

interface UserInformationsStateType {
  userInformationComponents: (() => JSX.Element)[];
  pageNumber: number;
  increasePageNumber: () => void;
  decreasePageNumber: () => void;
  bodyInformations: BodyInformationType[];
  setBodyInformationValue: (index: number, value: string) => void;
  exercisePruposes: ExercisePruposeType[];
  setExercisePurposeIsCheck: (index: number) => void;
}

export const useUserInformationStore = create<UserInformationsStateType>(
  (set) => ({
    userInformationComponents: [BodyInformation, ExercisePurpose],
    pageNumber: 0,
    increasePageNumber: () =>
      set((state) => {
        return {
          pageNumber: Math.min(
            state.pageNumber + 1,
            state.userInformationComponents.length,
          ),
        };
      }),
    decreasePageNumber: () =>
      set((state) => {
        return {
          pageNumber: Math.max(state.pageNumber - 1, 0),
        };
      }),
    bodyInformations: [
      {
        labelName: "생년월일",
        inputType: "date",
        value: "",
      },
      {
        labelName: "키",
        unit: "cm",
        value: "",
      },
      {
        labelName: "몸무게",
        unit: "kg",
        value: "",
      },
      {
        labelName: "성별",
        value: "",
      },
    ],
    setBodyInformationValue: (index: number, newValue: string) =>
      set((state) => {
        const updateBodyInformationValue = [...state.bodyInformations];
        updateBodyInformationValue[index] = {
          ...updateBodyInformationValue[index],
          value: newValue,
        };

        return { bodyInformations: updateBodyInformationValue };
      }),
    exercisePruposes: [
      {
        purpose: "체형교정",
        isCheck: false,
      },
      {
        purpose: "다이어트",
        isCheck: false,
      },
      {
        purpose: "벌크업",
        isCheck: false,
      },
      {
        purpose: "대회 출전",
        isCheck: false,
      },
      {
        purpose: "바디 프로필",
        isCheck: false,
      },
      {
        purpose: "근력 증가",
        isCheck: false,
      },
      {
        purpose: "근육량 증가",
        isCheck: false,
      },
    ],
    setExercisePurposeIsCheck: (index: number) =>
      set((state) => {
        const updateExercisePruposeIsCheck = [...state.exercisePruposes];
        updateExercisePruposeIsCheck[index] = {
          ...updateExercisePruposeIsCheck[index],
          isCheck: !updateExercisePruposeIsCheck[index].isCheck,
        };

        return { exercisePruposes: updateExercisePruposeIsCheck };
      }),
  }),
);
