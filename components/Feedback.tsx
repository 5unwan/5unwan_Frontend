import React from "react";
import { MessageSquare } from "lucide-react";

interface FeedbackProps {
  mealTime: Date;
  feedback: string;
}
export default function Feedback({ mealTime, feedback }: FeedbackProps) {
  return (
    <section className="flex w-full">
      <div>
        <MessageSquare className="mr-2 scale-x-[-1]" />
      </div>
      <div>
        <p className="whitespace-pre-wrap">
          {feedback}
          <br />
        </p>
      </div>
    </section>
  );
}
