import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlarmCheck, Bell, User } from "lucide-react";
import AlarmItem from "@/components/AlarmItem";
interface TrainerHeaderProps {
  trainerName: string;
}

function TrainerHeader({ trainerName }: TrainerHeaderProps) {
  return (
    <section className="flex h-[87px] w-full items-center justify-between text-2xl">
      <div className="text-[20px]">
        <p>안녕하세요</p>
        <p>{`${trainerName} 트레이너님👋`}</p>
      </div>
      <div className="flex h-[49px] w-[49px] cursor-pointer items-center justify-center rounded-2xl bg-primary-trainer">
        <Bell className="text-main-bg" size={32} />
      </div>
    </section>
  );
}

export default TrainerHeader;
