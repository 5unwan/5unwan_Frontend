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
        {feedback.split("\n").map((content, index) => (
          <p
            key={`feedback${index}_${mealTime}_${content}`}
            className="whitespace-pre-wrap"
          >
            {content}
            <br />
          </p>
        ))}
      </div>
    </section>
  );
}
