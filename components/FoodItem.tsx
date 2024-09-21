"use client";

import Image from "next/image";
import imageSvg from "public/image.svg";
import { EllipsisVertical } from "lucide-react";
import { Button } from "./ui/button";
import Feedback from "./Feedback";
import { FoodDataProps } from "@/types/food";

interface FoodItemProps {
  foodData: FoodDataProps;
  onClickOpenWriteFeedback: () => void;
  onClickCloseWriteFeedback: () => void;
}

export default function FoodItem({
  foodData,
  onClickOpenWriteFeedback,
  onClickCloseWriteFeedback,
}: FoodItemProps) {
  const { src = imageSvg, mealType, mealAmount, mealMemo, feedback } = foodData;

  return (
    <section className="relative flex h-[216px] w-full p-2 text-white">
      <div className="h-1/1 mr-[12px] flex aspect-square items-center justify-center rounded-[10px] bg-[#D9D9D9]">
        <Image src={src} alt="Image" width={72} height={72} />
      </div>
      <div className="h-1/1 flex w-full min-w-[168px] flex-col justify-between">
        <article>
          <p className="text-[17px]">{mealType}</p>
          <p className="text-[13px] text-sub-text">{mealAmount}</p>
          <p className="text-[13px] text-sub-text">{mealMemo}</p>
        </article>
        {feedback ? (
          <Feedback feedback={feedback} />
        ) : (
          <Button
            className="w-full rounded-[100px] bg-[#303030] hover:bg-primary-trainer"
            onClick={onClickOpenWriteFeedback}
          >
            피드백 달기
          </Button>
        )}
      </div>

      <EllipsisVertical className="rotate-90 text-main-text" size={30} />
    </section>
  );
}
