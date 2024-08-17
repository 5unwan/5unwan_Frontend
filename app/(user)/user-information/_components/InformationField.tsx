"use client";

import { ChangeEvent, useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUserInformationStore } from "@/stores/useUserInformationStore";

import DateSelector from "./DateSelector";

interface InformationFieldProps {
  className?: string;
  labelName: string;
  inputType?: "date" | "text";
  unit?: string;
  value: string;
  index: number;
}

export default function InformationField({
  className,
  labelName,
  inputType = "text",
  unit,
  value,
  index,
}: InformationFieldProps) {
  const setBodyInformationValue = useUserInformationStore(
    (state) => state.setBodyInformationValue,
  );
  const [isOpenDateSelector, setIsOpenDateSelector] = useState(false);

  const handleClickInput = () => {
    if (inputType === "date") {
      setIsOpenDateSelector(true);
    }
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setBodyInformationValue(index, event.target.value);
  };

  const getSelectedDate = (year: number, month: number, day: number) => {
    const date = new Date(year, month - 1, day + 1);

    setBodyInformationValue(index, date.toISOString().split("T")[0]);
  };

  return (
    <div
      className={cn(
        "group relative flex min-h-[82px] min-w-[340px] max-w-[80%] items-center justify-around rounded-[30px] focus-within:bg-primary-user",
        className,
      )}
    >
      <Label
        htmlFor={labelName}
        className="min-w-20 text-xl text-main-text group-focus-within:text-black"
      >
        {labelName}
      </Label>
      <Input
        id={labelName}
        value={value}
        onClick={handleClickInput}
        onChange={handleChangeValue}
        readOnly={inputType === "date"}
        className={cn(
          "h-[44px] w-[150px] rounded-[10px] bg-sub-bg text-right text-[20px] text-main-text",
          unit && "pr-10",
        )}
      />
      <span className="absolute right-10 text-main-text">{unit}</span>
      {isOpenDateSelector && (
        <DateSelector
          onMouseDownButton={getSelectedDate}
          setClose={setIsOpenDateSelector}
          className="fixed bottom-0"
        />
      )}
    </div>
  );
}
