import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { CSSProperties } from "react";
interface MealJournalRadioCardProps {
  className: string;
  label: string;
  type: string;
  mealTimeAndSatiety: Array<{ value: string; key: string }>;
  select: string;
  handleClickJournalContent: (type: string, value: string) => void;
}

export default function MealJournalRadioCard({
  className,
  label,
  type,
  mealTimeAndSatiety,
  select,
  handleClickJournalContent,
}: MealJournalRadioCardProps) {
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
                select === value && className,
              )}
              onClick={() => {
                handleClickJournalContent(type, value);
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
