"use client";

import { ChangeEvent, InputHTMLAttributes, forwardRef, useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useStorageStore } from "@/stores/useStorageStore";
import { Input } from "./ui/input";

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, ...props }, ref) => {
    const userType = useStorageStore((state) => state.userType);
    const [inputValue, setInputValue] = useState("");

    const handleClickClearInputValue = () => {
      setInputValue("");
      if (ref && typeof ref === "object" && ref.current) {
        ref.current.value = "";
      }
    };

    const handleChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    };

    return (
      <div className={cn("relative w-full", className)}>
        <Input
          ref={ref}
          value={inputValue}
          onChange={handleChangeInputValue}
          className="h-[46px] w-full rounded-[10px] border-none bg-third-bg px-10 text-main-text"
          {...props}
        />
        <Search
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 transform"
          color={userType === "Trainer" ? "#5065ff" : "#d5ff76"}
        />
        {inputValue && (
          <X
            size={16}
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer"
            onClick={handleClickClearInputValue}
          />
        )}
      </div>
    );
  },
);

SearchBar.displayName = "SearchBar";
