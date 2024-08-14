import { ButtonHTMLAttributes } from "react";
import { Dumbbell, Plus, Utensils, Zap } from "lucide-react";

interface CreateJournalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  journalType: "exercise" | "diet" | "pt";
}

export default function CreateJournal({
  journalType,
  ...props
}: CreateJournalProps) {
  const getIconByJournalType = () => {
    switch (journalType) {
      case "exercise":
        return <ExerciseIcon />;
      case "diet":
        return <DietIcon />;
      case "pt":
        return <PTIcon />;
    }
  };

  return (
    <div className="flex h-[130px] w-[164px] flex-col justify-between rounded-[30px] bg-primary-trainer p-5">
      {getIconByJournalType()}
      <div className="flex justify-end">
        <button
          {...props}
          className="flex h-[35px] w-[35px] items-center justify-center rounded-[13px] bg-main-bg"
        >
          <Plus size={20} color="#5065ff" />
        </button>
      </div>
    </div>
  );
}

function ExerciseIcon() {
  return (
    <div>
      <Zap size={25} color="#1C1C1C" />
      <p className="mt-1 text-base font-bold text-third-text">운동</p>
    </div>
  );
}

function DietIcon() {
  return (
    <div>
      <Utensils size={25} color="#1C1C1C" />
      <p className="mt-1 text-base font-bold text-third-text">식단</p>
    </div>
  );
}

function PTIcon() {
  return (
    <div>
      <Dumbbell size={25} color="#1C1C1C" />
      <p className="mt-1 text-base font-bold text-third-text">PT</p>
    </div>
  );
}
