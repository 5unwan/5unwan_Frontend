"use client";

import Image from "next/image";
import imageSvg from "public/image.svg";
import { Input } from "./ui/input";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";
import ActionSheet, { actionProps } from "./ActionSheet";

interface DietItemProps {
  src: string;
  mealType: "아침" | "점심" | "저녁" | "간식" | "미입력";
  mealTime: Date;
  mealWeight: "가볍게" | "적당히" | "무겁게" | "미입력";
  mealMass: number;
  calorie: number;
}

function formatTime(date: Date): string {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const period = hours >= 12 ? "오후" : "오전";
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0"); // 0 시를 12 시로 표현하고 두 자리로 포맷
  const formattedMinutes = minutes.toString().padStart(2, "0");

  return `${period} ${formattedHours}:${formattedMinutes}`;
}

/**
 * @param {string} src - 이미지 경로
 * @param {"아침" | "점심" | "저녁" | "간식"} mealTime - 식사 시간을 나타내는 명사
 * @param {string} dateTime - 식사 시간 (타임스탬프 등)
 * @param {string} mealWeight - 식사량을 나타내는 텍스트
 * @param {number} mealMass - 식사의 무게 (그램 등)
 * @param {number} calorie - 식사의 칼로리
 */
export default function DietItem({
  src,
  mealType = "미입력",
  mealTime = new Date(),
  mealWeight = "미입력",
  mealMass = 0,
  calorie = 0,
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
        <div className="h-1/1 flex aspect-square w-[200px] items-center justify-center rounded-[10px] bg-[#D9D9D9]">
          <Image
            src={src ? src : imageSvg}
            alt="Image"
            width={72}
            height={72}
          />
        </div>
        <div className="h-1/1 ml-[12px] flex min-w-[168px] flex-col justify-between">
          <article>
            <span className="text-[17px]">{mealType}</span>
            <br />
            <span className="text-[13px] text-[#9E9E9E]">
              {`${formatTime(mealTime)}`} ㆍ {mealWeight}
            </span>
            <br />
            <span className="text-[13px] text-[#9E9E9E]">
              {`${mealMass}g / ${calorie}kcal `}
            </span>
          </article>
          <Input
            className="rounded-[10px] border-[#9E9E9E] bg-[#1E1E1E] text-[15px] placeholder:text-center placeholder:text-[#9E9E9E]"
            placeholder="피드백을 남겨주세요"
          />
        </div>

        <EllipsisVertical
          className="text-[#9E9E9E]"
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
