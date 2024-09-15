"use client";

import { useStorageStore } from "@/stores/useStorageStore";
import { UserType } from "@/types/user";
import { Button } from "./ui/button";

export default function UserTypeSelection() {
  const setUserType = useStorageStore((state) => state.setUserType);

  const handleClickSetUserType = (userType: UserType) => {
    setUserType(userType);
  };

  return (
    <section>
      <Button
        className="mt-[14px] h-[57px] w-full rounded-[18px] bg-primary-user text-[17px] font-bold text-black"
        onClick={() => handleClickSetUserType("Member")}
      >
        회원으로 로그인
      </Button>
      <Button
        className="mt-[14px] h-[57px] w-full rounded-[18px] bg-primary-trainer p-3 text-[17px] font-bold text-white"
        onClick={() => handleClickSetUserType("Trainer")}
      >
        트레이너로 로그인
      </Button>
    </section>
  );
}
