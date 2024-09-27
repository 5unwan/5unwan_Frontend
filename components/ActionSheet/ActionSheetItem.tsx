import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface ItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

export function ActionSheetItem({ label, className, ...props }: ItemProps) {
  return (
    <Button
      className={cn(
        `h-[56px] w-full rounded-none bg-sub-bg text-[17px] font-normal text-white hover:bg-[#30303088]`,
        className,
      )}
      {...props}
    >
      {label}
    </Button>
  );
}
