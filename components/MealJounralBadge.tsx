import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";
interface MealJournalBadgeProps {
  label: string;
  type: string;
  mealTimeAndSatiety: Array<{ value: string; key: string }>;
  select: string;
  className: string;
  onClickJournalContent: (type: string, value: string) => void;
}

export default function MealJournalBadge({
  label,
  type,
  className,
  mealTimeAndSatiety,
  select,
  onClickJournalContent,
}: MealJournalBadgeProps) {
  return (
    <section className="w-full">
      <p className="text-[#f5f5f5]">{label}</p>
      <section className="mt-2 flex w-full gap-2 overflow-x-scroll">
        {mealTimeAndSatiety.map(({ value, key }) => {
          return (
            <Button
              key={key}
              className={cn(
                `h-[34px] min-w-[61px] rounded-[13px] bg-[#303030] text-sub-text hover:bg-primary-user hover:text-main-bg`,
                select === value && "bg-primary-user text-main-bg",
                className,
              )}
              onClick={() => {
                onClickJournalContent(type, value);
              }}
            >
              {value}
            </Button>
          );
        })}
      </section>
    </section>
  );
}
