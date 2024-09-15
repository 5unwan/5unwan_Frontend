import React from "react";
import { Heart } from "lucide-react";

interface ExcerciseItemProps {
  excercise: string;
  favorite: boolean;
  select: boolean;
  handleClickSetExcercise: (excercise: string) => void;
}
export default function ExcerciseItem({
  excercise,
  favorite,
  select,
  handleClickSetExcercise,
}: ExcerciseItemProps) {
  return (
    <section
      className={`flex min-h-[46px] w-full items-center justify-between rounded-[10px] ${select ? "text bg-primary-user text-sub-bg" : "bg-[#303030]"} px-5`}
      onClick={() => {
        handleClickSetExcercise(excercise);
      }}
    >
      <span>{excercise}</span>
      <Heart
        className={`h-[22px] w-[22px] ${select ? (favorite ? "fill-[#303030]" : "text-[#303030]") : favorite ? "fill-sub-text text-sub-text" : "text-sub-text"} hover:cursor-pointer"`}
      />
    </section>
  );
}
