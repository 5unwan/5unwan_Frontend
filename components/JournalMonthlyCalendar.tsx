import React from "react";
import { Calendar } from "./ui/calendar";
import { ko } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

interface JournalMonthlyCalendarProps {
  today: Date;
  selectDate: Date;
  onClickSetSelectDate: (date: Date) => void;
}

export default function JournalMonthlyCalendar({
  today,
  selectDate,
  onClickSetSelectDate,
}: JournalMonthlyCalendarProps) {
  return (
    <Calendar
      locale={ko}
      id="calendar"
      className="w-full animate-slide-down duration-100"
      mode="single"
      classNames={{
        month: "w-full",
        row: "flex w-full mt-10",
        cell: "text-center w-full",
        head_cell:
          "rounded-md w-full font-normal  mt-10 last:text-sub-text first:text-sub-text",
        head_row: "flex w-full justify-between",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          `h-9 w-9 p-0 font-normal aria-selected:opacity-100`,
        ),
        day_today: "text-red-500",
        day_selected:
          "bg-main-text text-black focus:bg-main-text focus:text-black",
        day_outside:
          "day-outside aria-selected:bg-primary-trainer text-sub-text focus:text-main-text",
      }}
      today={today}
      month={selectDate}
      selected={selectDate}
      numberOfMonths={1}
      onDayClick={onClickSetSelectDate}
    />
  );
}
