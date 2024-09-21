import { cn } from "@/lib/utils";

interface FoodItemContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function FoodItemContainer({
  className,
  children,
}: FoodItemContainerProps) {
  return <div className={cn("h-fit w-full", className)}>{children}</div>;
}
