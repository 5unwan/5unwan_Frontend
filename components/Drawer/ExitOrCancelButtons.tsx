import { cn } from "@/lib/utils";
import { useStorageStore } from "@/stores/useStorageStore";
import { Button } from "../ui/button";

interface ExitOrCancelButtonsProps {
  className?: string;
  onClickCloseDrawer: () => void;
}

export default function ExitOrCancelButtons({
  className,
  onClickCloseDrawer,
}: ExitOrCancelButtonsProps) {
  const userType = useStorageStore((state) => state.userType);

  return (
    <div
      className={cn("flex w-full items-center justify-center gap-3", className)}
    >
      <Button
        onClick={onClickCloseDrawer}
        className={cn(
          "h-14 w-40 rounded-[20px] bg-transparent font-bold",
          userType === "Trainer"
            ? "border border-primary-trainer hover:bg-primary-trainer hover:text-third-text"
            : "border border-primary-user hover:bg-primary-user hover:text-third-text",
        )}
      >
        취소
      </Button>
      <Button
        className={cn(
          "h-14 w-40 rounded-[20px] bg-transparent font-bold",
          userType === "Trainer"
            ? "border border-primary-trainer hover:bg-primary-trainer hover:text-third-text"
            : "border border-primary-user hover:bg-primary-user hover:text-third-text",
        )}
      >
        나가기
      </Button>
    </div>
  );
}
