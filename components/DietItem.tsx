"use client";

import Image from "next/image";
import imageSvg from "public/image.svg";
import { Input } from "./ui/input";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { formatTime } from "@/utils/dateUtils";
import ActionSheet from "./ActionSheet";
import { actionProps } from "@/types/actionSheet";

interface DietItemProps {
  src: string;
  mealType: "아침" | "점심" | "저녁" | "간식";
  mealTime: Date;
  mealAmount: "가볍게" | "적당히" | "무겁게";
  mealWeight: number;
  calorie: number;
}

export default function DietItem({
  src,
  mealType,
  mealTime = new Date(),
  mealAmount,
  mealWeight,
  calorie,
}: DietItemProps) {
  const [statusAction, setStatusAction] = useState(false);

  const openAction = (): void => {
    setStatusAction(true);
  };
  const closeAction = (): void => {
    setStatusAction(false);
  };

  const actions: Array<actionProps> = [
    {
      name: "공유",
      action: () => {
        closeAction();
      },
      type: "basic",
    },
    {
      name: "수정",
      action: () => {
        closeAction();
      },
      type: "basic",
    },
    {
      name: "삭제",
      action: () => {
        closeAction();
      },
      type: "danger",
    },
  ];

  return (
    <>
      <div className="flex h-[219px] w-full justify-center p-3 text-white">
        <div className="min-h-[200px]h-1/1 flex aspect-square min-w-[200px] items-center justify-center rounded-[10px] bg-[#D9D9D9]">
          <Image
            src={src ? src : imageSvg}
            alt="Image"
            width={72}
            height={72}
          />
        </div>
        <div className="h-1/1 ml-[12px] flex w-full min-w-[168px] flex-col justify-between">
          <article>
            <span className="text-[17px]">{mealType}</span>
            <br />
            <span className="text-[13px] text-sub-text">
              {`${formatTime(mealTime)}`} ㆍ {mealAmount}
            </span>
            <br />
            <span className="text-[13px] text-sub-text">
              {`${mealWeight}g / ${calorie}kcal `}
            </span>
          </article>
          <Input
            className="rounded-[10px] border-sub-text bg-[#1E1E1E] text-[15px] placeholder:text-center placeholder:text-sub-text"
            placeholder="피드백을 남겨주세요"
          />
        </div>

        <EllipsisVertical
          className="text-sub-text"
          size={30}
          onClick={openAction}
        />
      </div>
      {statusAction && (
        <ActionSheet actions={actions} closeAction={closeAction} />
      )}
    </>
  );
}
