"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes } from "react";

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
    <div className={(cn("grid w-full gap-2"), className)}>
      <Label htmlFor={id} className="text-[17px] text-main-text">
        {label}
      </Label>
      <Textarea
        placeholder={placeholder}
        id={id}
        className="h-full w-full resize-none rounded-[20px] bg-third-bg text-main-text"
        {...props}
      />
    </div>
  );
}
