"use client";

import React, { useState } from "react";
import { formatDate } from "@/utils/dateUtils";
import { ChevronsUpDown } from "lucide-react";

interface JournalCalendarProps {
  date: Date;
  onClick: () => void;
}
export default function JournalCalendar({
  date,
  onClick,
}: JournalCalendarProps) {
  return (
    <div
      className="flex h-[22px] w-fit items-center text-[23px]"
      onClick={onClick}
    >
      {formatDate(date)}
      <ChevronsUpDown className="ml-[6px]" />
    </div>
  );
}
