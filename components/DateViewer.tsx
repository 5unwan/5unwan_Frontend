import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { HTMLAttributes } from "react";

interface DateViewerProps extends HTMLAttributes<HTMLDivElement> {
  date: Date;
  className?: string;
}

export default function DateViewer({
  date = new Date(),
  className,
  ...props
}: DateViewerProps) {
  const getYearMonthDay = () => {
    return date.toISOString().split("T")[0].replace(/-/g, ".");
  };

  return (
    <div className={cn("flex items-center gap-5", className)}>
      <p>운동 날짜</p>
      <Badge
        className="flex h-[34px] w-[118px] items-center justify-center rounded-md bg-third-bg text-[17px] text-primary-trainer"
        {...props}
      >
        {getYearMonthDay()}
      </Badge>
    </div>
  );
}
