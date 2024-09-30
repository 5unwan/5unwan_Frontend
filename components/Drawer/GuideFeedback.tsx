import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface GuideFeedbackProps {
  className?: string;
}

export default function GuideFeedback({ className }: GuideFeedbackProps) {
  return (
    <div
      className={cn(
        "flex w-full flex-col items-center justify-center gap-3",
        className,
      )}
    >
      <MessageSquare size={30} />
      <p>아래에 피드백을 작성해주세요</p>
    </div>
  );
}
