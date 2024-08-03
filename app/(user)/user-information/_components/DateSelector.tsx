"use client";

import Wheel from "@/components/keenSlider/wheel";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format, getDaysInMonth } from "date-fns";
import { useState } from "react";

interface DateSelectorProps {
  onMouseDownButton: (
    year: number,
    month: number,
    day: number,
    closeDateSelector: boolean,
  ) => void;
  className: string;
}
export default function DateSelector({
  onMouseDownButton,
  className,
}: DateSelectorProps) {
  const yearRange = {
    start: 1940,
    end: new Date().getFullYear() + 1,
  };
  const today = new Date();
  const [todayYear, setTodayYear] = useState(today.getFullYear());
  const [todayMonth, setTodayMonth] = useState(today.getMonth());
  const [todayDate, setTodayDate] = useState(today.getDate());

  const formateMonth = (
    _relative: number,
    absolute: number,
    selectedDate: number,
  ) => {
    const date = new Date();
    date.setMonth(absolute);
    setTimeout(() => setTodayMonth(selectedDate + 1));

    return format(date, "LLLL");
  };

  const formateDay = (
    _relative: number,
    absolute: number,
    selectedDate: number,
  ) => {
    setTimeout(() => setTodayDate(selectedDate + 1));

    return String(absolute + 1);
  };

  const formateYear = (
    _relative: number,
    absolute: number,
    selectedDate: number,
  ) => {
    setTimeout(() => setTodayYear(yearRange.start + selectedDate));

    return String(yearRange.start + absolute);
  };

  const getDaysInMonthForYearAndMonth = (year: number, month: number) => {
    const date = new Date(year, month - 1);

    return getDaysInMonth(date);
  };

  return (
    <div
      className={cn(
        "animate-slide-up flex w-full flex-col items-center rounded-t-[13px] bg-sub-bg",
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
            setValue={formateMonth}
          />
        </div>
        <div style={{ width: 70, height: 180 }}>
          <Wheel
            loop
            initIdx={todayDate - 1}
            length={getDaysInMonthForYearAndMonth(todayYear, todayMonth)}
            width={23}
            perspective="center"
            setValue={formateDay}
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
            setValue={formateYear}
          />
        </div>
      </div>
      <Button
        onMouseDown={() =>
          onMouseDownButton(todayYear, todayMonth, todayDate, false)
        }
        className="mb-10 mt-5 h-[55px] w-[161px] rounded-[20px] bg-primary-user text-[20px] font-bold text-third-text hover:bg-[#c6f067]"
      >
        확인
      </Button>
    </div>
  );
}
