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
