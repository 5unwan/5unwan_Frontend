"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputHTMLAttributes, useRef, useState } from "react";
import DateSelector from "./DateSelector";

interface InformationFieldProps {
  className?: string;
  htmlForAndId: string;
  labelName: string;
  inputType?: "date" | "text";
  unit?: string;
}

export default function InformationField({
  className,
  htmlForAndId,
  labelName,
  inputType = "text",
  unit,
}: InformationFieldProps) {
  const [isOpenDateSelector, setIsOpenDateSelector] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickInput = () => {
    if (inputType === "date") {
      setIsOpenDateSelector(true);
    }
  };

  const handleMouseDownGetDate = (year: number, month: number, day: number) => {
    const date = new Date(year, month - 1, day + 1);

    if (inputRef.current) {
      inputRef.current.value = date.toISOString().split("T")[0];
    }
  };

  return (
    <div
      className={cn(
        "group relative flex min-h-[82px] min-w-[340px] max-w-[80%] items-center justify-around rounded-[30px] focus-within:bg-primary-user",
        className,
      )}
    >
      <Label
        htmlFor={htmlForAndId}
        className="min-w-20 text-xl text-main-text group-focus-within:text-black"
      >
        {labelName}
      </Label>
      <Input
        id={htmlForAndId}
        ref={inputRef}
        onClick={handleClickInput}
        readOnly={inputType === "date"}
        className={cn(
          "h-[44px] w-[150px] rounded-[10px] bg-sub-bg text-right text-[20px] text-main-text",
          unit && "pr-10",
        )}
      />
      <span className="absolute right-10 text-main-text">{unit}</span>
      {isOpenDateSelector && (
        <DateSelector
          onMouseDownButton={handleMouseDownGetDate}
          setClose={setIsOpenDateSelector}
          className="fixed bottom-0"
        />
      )}
    </div>
  );
}
