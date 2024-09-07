"use client";

import React, { useState } from "react";
import { Plus, Bell } from "lucide-react";
import { formatDate } from "@/utils/dateUtils";
import { ChevronsUpDown } from "lucide-react";
import { Calendar } from "./ui/calendar";
import CalendarWeeks from "./CalendarWeek";

export default function HeaderWithCalendar() {
  const today = new Date();
  const [date, setDate] = useState<Date>(today);
  const [spread, setSpread] = useState(false);

  const handleDayClick = (date: Date) => {
    if (date) {
      setDate(date);
    }
  };

  const onSpreadCalendar = (event: React.MouseEvent) => {
    event.stopPropagation();
    setSpread(!spread);
  };

  return (
    <div className="h-[74px] max-h-[74px] w-full flex-col">
      <div className="flex h-[74px] w-full items-center justify-between">
        <div className="relative left-[19px] text-[20px]">
          <div
            className="flex items-center text-[23px]"
            onClick={onSpreadCalendar}
          >
            {formatDate(date)}
            <ChevronsUpDown className="relative ml-[6px]" />
          </div>
        </div>
        <div className="relative mr-[19px] flex">
          <button className="relative mr-[4px] flex h-[49px] w-[49px] items-center justify-center rounded-[20px] border border-primary-trainer bg-none">
            <Plus size={30} className="text-primary-trainer" />
          </button>
          <button className="relative ml-[4px] flex h-[49px] w-[49px] items-center justify-center rounded-[20px] border border-primary-trainer bg-primary-trainer">
            <Bell size={30} className="text-main-bg" />
          </button>
        </div>
      </div>

      <div className="h-[68px] w-full">
        {spread ? (
          <Calendar
            id="calendar"
            className="w-full animate-slide-down duration-100"
            mode="single"
            classNames={{
              month: "w-full",
              row: "flex w-full mt-10",
              cell: "text-center w-full",
              day_selected:
                "bg-main-text text-black focus:bg-main-text focus:text-black",
              day_outside:
                "day-outside aria-selected:bg-primary-trainer text-sub-text focus:text-main-text",
            }}
            today={today}
            selected={date}
            numberOfMonths={1}
            onDayClick={handleDayClick}
          />
        ) : (
          <CalendarWeeks
            date={date}
            onDayClick={handleDayClick}
            today={today}
          />
        )}
      </div>
    </div>
  );
}
