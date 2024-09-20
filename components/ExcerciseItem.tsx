import React from "react";
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExcerciseItemProps {
  className: string;
  excercise: string;
  favorite: boolean;
  select: boolean;
  onClickSetExcercise: (excercise: string) => void;
}
export default function ExcerciseItem({
  excercise,
  favorite,
  select,
  onClickSetExcercise,
}: ExcerciseItemProps) {
  return (
    <section
      className={cn(
        "flex min-h-[46px] w-full items-center justify-between rounded-[10px] bg-[#303030] px-5",
        {
          "bg-primary-user text-sub-bg": select,
        },
      )}
      onClick={() => {
        onClickSetExcercise(excercise);
      }}
    >
      <span>{excercise}</span>
      <Heart
        className={cn("h-[22px] w-[22px] hover:cursor-pointer", {
          "fill-[#303030]": select && favorite,
          "text-[#303030]": select && !favorite,
          "fill-sub-text text-sub-text": !select && favorite,
          "text-sub-text": !select && !favorite,
        })}
      />
    </section>
  );
}
