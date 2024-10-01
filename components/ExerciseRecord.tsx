"use client";

import { useState } from "react";
import { ChevronDown, Ellipsis } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useStorageStore } from "@/stores/useStorageStore";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function ExerciseRecord() {
  const [hasMemo, setHasMemo] = useState(false);
  const userType = useStorageStore((state) => state.userType);
  const DUMMY_TEXT =
    "우리가 알고 있는 광배는 골반 쪽에 붙어있습니다.\n그러므로 의자를 앉을 때, 척추를 정렬 시킨 상태에서 진행해야합니다.";

  const handleClickToggleVisibleMemo = () => {
    setHasMemo((prev) => !prev);
  };

  return (
    <Card className="relative flex w-full flex-col gap-3 rounded-[20px] border-none bg-primary-trainer p-4">
      <div className="flex items-center gap-1 px-1">
        <p className="whitespace-nowrap font-bold">랫 풀 다운</p>
        <Badge
          className={cn(
            userType === "Trainer"
              ? "text-primary-trainer"
              : "text-primary-user",
          )}
        >
          PT
        </Badge>
        <div className="flex w-full justify-end gap-1">
          <Ellipsis className="" />
          <Button
            className="h-6 w-6 rounded-full bg-blue-300 p-1"
            onClick={handleClickToggleVisibleMemo}
          >
            <ChevronDown color="#000000" />
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-1">
        <Badge>1세트 10kg 20회</Badge>
        <Badge className="">2세트 20kg 20회</Badge>
        <Badge className="">3세트 25kg 20회</Badge>
        <Badge className="">4세트 30kg 20회</Badge>
      </div>
      <div
        className={cn(
          "flex flex-col gap-3 overflow-hidden transition-all duration-300 ease-in-out",
          hasMemo ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="w-full border border-sub-text" />
        <div>
          <p className="h-full w-full whitespace-pre-wrap rounded-[20px] px-1">
            {DUMMY_TEXT}
          </p>
        </div>
      </div>
    </Card>
  );
}
