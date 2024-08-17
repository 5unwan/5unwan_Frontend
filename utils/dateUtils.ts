import { format, getDaysInMonth } from "date-fns";
import { yearRange } from "@/constants/date";

export const formatMonth = (
  setTodayMonth: (month: number) => void,
  _relative: number,
  absolute: number,
  selectedMonth: number,
) => {
  const date = new Date();
  date.setMonth(absolute);
  setTimeout(() => setTodayMonth(selectedMonth + 1));

  return format(date, "LLLL");
};

export const formatDay = (
  setTodayDate: (date: number) => void,
  _relative: number,
  absolute: number,
  selectedDay: number,
) => {
  setTimeout(() => setTodayDate(selectedDay + 1));

  return String(absolute + 1);
};

export const formatYear = (
  setTodayYear: (year: number) => void,
  _relative: number,
  absolute: number,
  selectedYear: number,
) => {
  setTimeout(() => setTodayYear(yearRange.start + selectedYear));

  return String(yearRange.start + absolute);
};

export const getDaysInMonthForYearAndMonth = (year: number, month: number) => {
  const date = new Date(year, month - 1);

  return getDaysInMonth(date);
};

export const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours >= 12 ? "오후" : "오전";
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${period} ${formattedHours}:${formattedMinutes}`;
};
