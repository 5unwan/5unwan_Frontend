"use client";

import { TextareaHTMLAttributes } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TextareaWithLabelProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  placeholder: string;
  className?: string;
}
export function TextareaWithLabel({
  label,
  id,
  placeholder,
  className,
  ...props
}: TextareaWithLabelProps) {
  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <Label htmlFor={id} className="text-[17px] text-main-text">
        {label}
      </Label>
      <Textarea
        placeholder={placeholder}
        id={id}
        className="h-full w-full resize-none rounded-[20px] bg-sub-bg text-main-text"
        {...props}
      />
    </div>
  );
}
