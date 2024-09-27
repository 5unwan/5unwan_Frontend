"use client";

import { Search, ImagePlus } from "lucide-react";

import InputWithLabel from "./InputWithLabel";
import { TextareaWithLabel } from "./TextareaWithLabel";

export default function WriteJournal() {
  return (
    <section className="flex w-full flex-col gap-2">
      <InputWithLabel
        label="운동 종목 검색"
        id="exercise"
        placeholder="클릭하여 운동 종목+세트수+횟수를 설정하세요"
        styleProps={{ inputClassName: "pl-12" }}
      >
        <Search className="absolute left-3 z-10" />
      </InputWithLabel>
      <InputWithLabel
        label="사진, 영상"
        id="media"
        type="file"
        styleProps={{ inputClassName: "h-[266px]" }}
      >
        <ImagePlus className="absolute z-10" />
      </InputWithLabel>
      <TextareaWithLabel
        label="메모"
        id="memo"
        placeholder="메모를 작성하세요."
        className="h-32"
      />
    </section>
  );
}
