import { EllipsisVertical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "./ui/badge";

export default function ExerciseRecord() {
  return (
    <Card className="relative flex w-full flex-col gap-3 rounded-[20px] border-none bg-primary-trainer p-4">
      <EllipsisVertical className="absolute right-1 top-2" />
      <div className="flex gap-3 px-1">
        <p className="font-bold">120분</p>
        <Badge>PT</Badge>
        <Badge variant={"outline"}>400 kcal</Badge>
      </div>
      <div className="flex flex-col px-1">
        <div className="flex gap-2">
          <p className="font-bold">원레드 데드리프트</p>
          <p>3set / 20</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold">스쿼트</p>
          <p>3set / 20</p>
        </div>
        <div className="flex gap-2">
          <p className="font-bold">레그프레스</p>
          <p>3set / 20</p>
        </div>
      </div>
      <div className="w-full border border-sub-text"></div>
      <div>
        <pre className="h-full w-full rounded-[20px] px-1">
          {"호흡은 수축할 때\n내쉬고 이완할 때 마시고\n코어 잘 잡고 운동하기"}
        </pre>
      </div>
    </Card>
  );
}
