"use client";

import Image from "next/image";
import imageSvg from "public/image.svg";
import { Input } from "./ui/input";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import { formatTime } from "@/utils/dateUtils";
import ActionSheet from "./ActionSheet";
import { actionProps } from "@/types/actionSheet";
import { Button } from "./ui/button";
import Feedback from "./Feedback";

interface FoodItemProps {
  src: string;
  mealType: "아침" | "아점" | "점심" | "점저" | "저녁" | "간식";
  mealTime: Date;
  mealAmount: "가볍게" | "배부르게" | "적당히" | "과하게";
  mealMemo: string;
  feedback: string | null;
}

export default function FoodItem({
  src,
  mealType,
  mealTime,
  mealAmount,
  mealMemo,
  feedback,
}: FoodItemProps) {
  const [statusAction, setStatusAction] = useState(false);
  const [showWriteFeedback, setShowWriteFeedback] = useState(false);

  const onClickOpenAction = (): void => {
    setStatusAction(true);
  };
  const onClickCloseAction = (): void => {
    setStatusAction(false);
  };

  const onClickOpenWriteFeedback = (): void => {
    setShowWriteFeedback(true);
  };

  const onClickCloseWriteFeedback = (): void => {
    setShowWriteFeedback(false);
  };

  const actions: Array<actionProps> = [
    {
      name: "공유",
      action: () => {
        onClickCloseAction();
      },
      type: "basic",
    },
    {
      name: "수정",
      action: () => {
        onClickCloseAction();
      },
      type: "basic",
    },
    {
      name: "삭제",
      action: () => {
        onClickCloseAction();
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
            <span className="text-[13px] text-sub-text">{mealAmount}</span>
            <br />
            <span className="text-[13px] text-sub-text">{mealMemo}</span>
          </article>
          {feedback !== null ? (
            <Feedback mealTime={mealTime} feedback={feedback} />
          ) : (
            <Button
              className="w-full rounded-[100px] bg-[#303030] hover:bg-primary-trainer"
              onClick={onClickOpenWriteFeedback}
            >
              피드백 달기
            </Button>
          )}
        </div>

        <EllipsisVertical
          className="rotate-90 text-main-text"
          size={30}
          onClick={onClickOpenAction}
        />
      </div>
      {statusAction && (
        <ActionSheet
          actions={actions}
          onClickCloseAction={onClickCloseAction}
        />
      )}
    </>
  );
}
