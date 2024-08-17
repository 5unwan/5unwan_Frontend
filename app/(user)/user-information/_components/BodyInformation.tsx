"use client";

import { Fragment, useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useUserInformationStore } from "@/stores/useUserInformationStore";
import InformationField from "./InformationField";

export default function BodyInformation() {
  const bodyInformations = useUserInformationStore(
    (state) => state.bodyInformations,
  );
  const increasePageNumber = useUserInformationStore(
    (state) => state.increasePageNumber,
  );
  const [isNextStep, setIsNextStep] = useState(false);

  const handleClickNextStep = () => {
    increasePageNumber();
  };

  const hasCheckedValue = () => {
    return bodyInformations.some(({ value }) => value.length === 0);
  };

  useEffect(() => {
    setIsNextStep(hasCheckedValue() ? false : true);
  }, [bodyInformations]);

  return (
    <Fragment>
      <header className="mt-[72px] flex flex-col items-center justify-center">
        <p className="mb-[13px] text-center text-[23px]">신체 정보</p>
        <p className="mb-[17px] text-center text-[15px]">
          해당 정보는 트레이너에게만 공유됩니다
        </p>
        <Progress value={50} className="h-2 w-[325px]" />
      </header>

      <article className="relative mt-[70px] flex h-full flex-col items-center bg-main-bg">
        {bodyInformations.map(
          ({ labelName, unit, inputType, value }, index) => (
            <InformationField
              key={labelName}
              labelName={labelName}
              unit={unit}
              inputType={inputType}
              value={value}
              index={index}
            />
          ),
        )}
        <Button
          disabled={!isNextStep}
          onClick={handleClickNextStep}
          className="fixed bottom-10 z-0 h-[55px] w-[161px] rounded-[20px] bg-primary-user text-[20px] font-bold text-third-text"
        >
          다음
        </Button>
      </article>
    </Fragment>
  );
}
