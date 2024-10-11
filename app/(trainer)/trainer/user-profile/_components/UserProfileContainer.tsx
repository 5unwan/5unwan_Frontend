"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface UserProfileProps {
  className?: string;
  children: ReactNode;
}

export default function UserProfileContainer({
  className,
  children,
}: UserProfileProps) {
  return <main className={cn("w-full", className)}>{children}</main>;
}
