import { Button } from "@/components/ui/button";
import React from "react";
interface MealJournalRadioCardProps {
  label: string;
  type: string;
  data: Array<{ value: string; key: string }>;
  select: string;
  handleClickJournalContent: (type: string, value: string) => void;
}

export default function MealJournalRadioCard({
  label,
  type,
  data,
  select,
  handleClickJournalContent,
}: MealJournalRadioCardProps) {
  return (
    <section className="w-full">
      <p className="text-[#f5f5f5]">{label}</p>
      <section className="mt-2 flex w-full gap-2 overflow-x-scroll">
        {data.map(({ value, key }) => {
          return (
            <Button
              key={key}
              className={`h-[34px] min-w-[61px] rounded-[13px] hover:bg-primary-user hover:text-main-bg ${select === value ? "bg-primary-user text-main-bg" : "bg-[#303030] text-sub-text"}`}
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
