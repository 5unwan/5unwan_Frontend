"use client";

import { Fragment, useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useUserInformationStore } from "@/stores/useUserInformationStore";

export default function ExercisePurpose() {
  const exercisePurposes = useUserInformationStore(
    (state) => state.exercisePruposes,
  );
  const setExercisePurposes = useUserInformationStore(
    (state) => state.setExercisePurposeIsCheck,
  );
  const decreasePageNumber = useUserInformationStore(
    (state) => state.decreasePageNumber,
  );

  const [isSubmit, setIsSubmit] = useState(false);

  const handleClickButton = (index: number) => {
    setExercisePurposes(index);
  };

  const handleClickPreviousStep = () => {
    decreasePageNumber();
  };

  const hasCheckedPurpose = () => {
    return exercisePurposes.some(({ isCheck }) => isCheck);
  };

  useEffect(() => {
    setIsSubmit(hasCheckedPurpose() ? true : false);
  }, [exercisePurposes]);

  return (
    <Fragment>
      <header className="relative mt-[72px] box-border flex flex-col items-center justify-center">
        <ArrowLeft
          aria-label="이전 페이지 이동"
          onClick={handleClickPreviousStep}
          className="absolute left-10 top-2 cursor-pointer"
        />
        <p className="mb-[13px] text-center text-[23px]">운동 목적</p>
        <p className="mb-[17px] text-center text-[15px]">
          해당 정보는 트레이너에게만 적용 됩니다
        </p>
        <Progress value={100} className="h-2 w-[325px]" />
      </header>
      <article className="relative mt-[70px] flex h-full flex-col items-center bg-main-bg">
        <section className="flex flex-wrap justify-start px-8">
          {exercisePurposes.map(({ purpose, isCheck }, index) => (
            <Button
              key={purpose}
              onClick={() => handleClickButton(index)}
              className={cn(
                "m-3 h-[41px] w-[109px] flex-none rounded-[15px] border border-primary-user bg-transparent",
                isCheck && "bg-primary-user text-third-text hover:bg-[#c6f067]",
              )}
            >
              {purpose}
            </Button>
          ))}
        </section>
        <Button
          disabled={!isSubmit}
          className="fixed bottom-10 z-0 h-[55px] w-[161px] rounded-[20px] bg-primary-user text-[20px] font-bold text-third-text"
        >
          완료
        </Button>
      </article>
    </Fragment>
  );
}
