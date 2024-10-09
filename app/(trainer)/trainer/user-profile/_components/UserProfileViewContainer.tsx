"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface UserProfileViewProps {
  className?: string;
  children: ReactNode;
}

export default function UserProfileViewContainer({
  className,
  children,
}: UserProfileViewProps) {
  return <main className={cn("w-full", className)}>{children}</main>;
}
