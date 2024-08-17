"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import UseMediaFileUpload from "@/hooks/useMediaFileUpload";
import { cn } from "@/lib/utils";
import { FolderDown } from "lucide-react";
import Image from "next/image";
import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  useRef,
} from "react";

interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  children?: ReactNode;
  styleProps?: {
    containerClassName?: string;
    inputClassName?: string;
  };
}

export default function InputWithLabel({
  label,
  id,
  type = "text",
  placeholder,
  styleProps = {},
  children,
  ...props
}: InputWithLabelProps) {
  const { containerClassName = "", inputClassName = "" } = styleProps;
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageFile, videoFile, changeMediaFile] = UseMediaFileUpload(inputRef);

  const handleClickInput = () => {
    inputRef.current?.click();
  };

  return (
    <div className={cn("grid w-full items-center gap-1.5", containerClassName)}>
      <Label htmlFor={id} className="min-w-10 text-[17px] text-main-text">
        {label}
      </Label>
      <div
        className={cn(
          "relative flex w-full items-center justify-center",
          type === "file" && "h-[266px]",
          (imageFile || videoFile) && "rounded-md border border-[#ccc]",
        )}
      >
        <Input
          onChange={changeMediaFile}
          type={type}
          id={id}
          ref={inputRef}
          placeholder={placeholder}
          className={cn(
            "z-10 h-[46px] rounded-[10px] bg-transparent text-main-text",
            type === "file" && "h-full",
            (imageFile || videoFile) && "hidden",
            inputClassName,
          )}
          {...props}
          accept="image/*,video/*"
        />
        {(imageFile || videoFile) && (
          <button
            onClick={handleClickInput}
            className="absolute right-2 top-2 z-10 rounded-2xl bg-third-bg p-2"
          >
            <FolderDown size={25} color="#5065ff" aria-label="폴더 열기" />
          </button>
        )}
        {imageFile && (
          <Image
            alt="불러온 이미지"
            src={imageFile}
            layout="fill"
            objectFit="contain"
          />
        )}
        {videoFile && (
          <video key={videoFile} controls className="h-full w-full">
            <source src={videoFile} type="video/mp4" />
          </video>
        )}
        {!imageFile && !videoFile && children}
      </div>
    </div>
  );
}
