import { cn } from "@/lib/utils";

interface ExitConfirmationProps {
  className?: string;
  type: "exercise" | "diet";
}

export default function ExitConfirmation({
  className,
  type,
}: ExitConfirmationProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center",
        className,
      )}
    >
      <p className="text-xl">
        {type === "exercise" ? "운동" : "식단"} 일지 작성에서 나가시겠어요?
      </p>
      <p className="text-sub-text">기록한 내용이 사라져요</p>
    </div>
  );
}
