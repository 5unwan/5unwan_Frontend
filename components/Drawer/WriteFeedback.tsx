import { forwardRef } from "react";
import { CircleArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

interface WriteFeedbackProps {
  className?: string;
  onClickSendFeedback: () => void;
}

const WriteFeedback = forwardRef<HTMLTextAreaElement, WriteFeedbackProps>(
  ({ className, onClickSendFeedback }, ref) => {
    return (
      <div className={cn("relative w-full", className)}>
        <Textarea
          ref={ref}
          className="w-full rounded-[10px] bg-third-bg p-3 pr-7"
        />
        <CircleArrowUp
          onClick={onClickSendFeedback}
          className="absolute bottom-2 right-2"
        />
      </div>
    );
  },
);

WriteFeedback.displayName = "WriteFeedback";

export default WriteFeedback;
