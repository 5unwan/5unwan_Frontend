"use client";

import { Dispatch, SetStateAction, useRef, useState } from "react";
import Wheel from "@/components/keenSlider/wheel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { yearRange } from "@/constants/date";
import useOutsideClick from "@/hooks/useOutsideClick";
import {
  formatDay,
  formatMonth,
  formatYear,
  getDaysInMonthForYearAndMonth,
} from "@/utils/dateUtils";

interface DateSelectorProps {
  onMouseDownButton: (year: number, month: number, day: number) => void;
  setClose: Dispatch<SetStateAction<boolean>>;
  className: string;
}
export default function DateSelector({
  onMouseDownButton,
  setClose,
  className,
}: DateSelectorProps) {
  const today = new Date();
  const [todayYear, setTodayYear] = useState(today.getFullYear());
  const [todayMonth, setTodayMonth] = useState(today.getMonth());

  const [todayDate, setTodayDate] = useState(today.getDate());
  const dateSelectorRef = useRef<HTMLDivElement>(null);

  const closeDateSelector = () => {
    setClose(false);
  };

  const handleMouseDownButton = () => {
    onMouseDownButton(todayYear, todayMonth, todayDate);
    closeDateSelector();
  };

  useOutsideClick(dateSelectorRef, closeDateSelector);

  return (
    <div
      ref={dateSelectorRef}
      className={cn(
        "z-10 flex w-full animate-slide-up flex-col items-center rounded-t-[13px] bg-sub-bg py-3",
        className,
      )}
    >
      <div className="flex">
        <div style={{ width: 180, height: 180 }}>
          <Wheel
            loop
            initIdx={todayMonth}
            length={12}
            width={140}
            perspective="right"
            setValue={(...props) => formatMonth(setTodayMonth, ...props)}
          />
        </div>
        <div style={{ width: 70, height: 180 }}>
          <Wheel
            loop
            initIdx={todayDate - 1}
            length={getDaysInMonthForYearAndMonth(todayYear, todayMonth)}
            width={23}
            perspective="center"
            setValue={(...props) => formatDay(setTodayDate, ...props)}
            key={`${todayYear}-${todayMonth}`}
          />
        </div>
        <div style={{ width: 100, height: 180 }}>
          <Wheel
            loop
            initIdx={todayYear - yearRange.start}
            length={yearRange.end - yearRange.start}
            width={23}
            perspective="left"
            setValue={(...props) => formatYear(setTodayYear, ...props)}
          />
        </div>
      </div>
      <Button
        onMouseDown={handleMouseDownButton}
        className="mb-10 mt-5 h-[55px] w-[161px] rounded-[20px] bg-primary-user text-[20px] font-bold text-third-text hover:bg-[#c6f067]"
      >
        확인
      </Button>
    </div>
  );
}
