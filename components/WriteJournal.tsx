import { Search, ImagePlus } from "lucide-react";

import InputWithLabel from "./InputWithLabel";
import { TextareaWithLabel } from "./TextareaWithLabel";

export default function WriteJournal() {
  return (
    <div className="flex w-full flex-col gap-2">
      <InputWithLabel
        label="운동"
        id="exercise"
        placeholder="클릭하여 운동 종목+세트수+횟수를 설정하세요"
      >
        <Search className="absolute right-3 z-10" />
      </InputWithLabel>
      <InputWithLabel
        label="칼로리"
        id="kcal"
        placeholder="운동하며 소모한 칼로리를 입력하세요"
      >
        <span className="absolute right-3 z-10">kcal</span>
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
        className="h-[266px]"
      />
    </div>
  );
}
