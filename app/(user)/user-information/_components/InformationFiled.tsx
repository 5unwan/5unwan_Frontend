"use client";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputHTMLAttributes, useRef, useState } from "react";
import DateSelector from "./DateSelector";

interface InformationFiledProps {
  className?: string;
  htmlForAndId: string;
  labelName: string;
  inputType?: "date" | "text";
  unit?: string;
}

export default function InformationFiled({
  className,
  htmlForAndId,
  labelName,
  inputType = "text",
  unit,
}: InformationFiledProps) {
  const [isVisiableDateSelector, setIsVisiableDateSelector] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusInput = () => {
    if (inputType === "date") {
      setIsVisiableDateSelector(true);
    }
  };

  const handleBlurInput = () => {
    setIsVisiableDateSelector(false);
  };

  const handleMouseDownGetDate = (
    year: number,
    month: number,
    day: number,
    closeDateSelector: boolean,
  ) => {
    const date = new Date(year, month - 1, day + 1);

    if (inputRef.current) {
      inputRef.current.value = date.toISOString().split("T")[0];
    }

    setIsVisiableDateSelector(closeDateSelector);
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
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        readOnly={inputType === "date"}
        className={cn(
          "h-[44px] w-[150px] rounded-[10px] bg-sub-bg text-right text-[20px] text-main-text",
          unit && "pr-10",
        )}
      />
      <span className="absolute right-10 text-main-text">{unit}</span>
      {isVisiableDateSelector && (
        <DateSelector
          onMouseDownButton={handleMouseDownGetDate}
          className="fixed bottom-0"
        />
      )}
    </div>
  );
}
