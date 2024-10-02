"use client";

import ActionSheetContainer from "@/components/ActionSheet";
import { ActionSheetItem } from "@/components/ActionSheet/ActionSheetItem";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatFullDate } from "@/utils/dateUtils";
import { Ellipsis, User } from "lucide-react";

import React, { useState } from "react";

interface UserListProps {
  profileImageUrl: string;
  userName: string;
  userBirthday: Date;
}

export default function UserList({
  profileImageUrl,
  userName,
  userBirthday,
}: UserListProps) {
  const [isOpenActionSheet, setIsOpenActionSheet] = useState(false);

  const handleClickOpenActionSheet = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    event.stopPropagation();
    setIsOpenActionSheet(true);
  };

  const handleClickCloseActionSheet = (
    event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    console.log("%cClose ActionSheet", "color: red;");
    setIsOpenActionSheet(false);
  };

  const handleClickRouteToUserProfile = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    console.log(`${userName} 회원 프로필 페이지 이동`);

    handleClickCloseActionSheet(event);
  };

  const handleClickDeleteUser = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    console.log(`${userName} 회원 삭제`);

    handleClickCloseActionSheet(event);
  };

  const handleRouteToUserDetail = () => {
    console.log(`${userName} 회원 식단/운동 정보 페이지 이동`);
  };

  return (
    <div
      className="mb-3 flex h-[82px] w-full items-center justify-between rounded-[30px] bg-primary-trainer p-4 text-black"
      onClick={handleRouteToUserDetail}
    >
      <article className="flex items-center gap-12">
        <Avatar className="h-[50px] w-[50px] rounded-[20px]">
          <AvatarImage src={profileImageUrl} alt="프로필 이미지" />
          <AvatarFallback className="h-[50px] w-[50px] rounded-[20px] bg-main-bg">
            <User color="#707070" className="h-full w-full p-2" />
          </AvatarFallback>
        </Avatar>

        <span className="w-[100px] text-xl">{userName}</span>
      </article>

      <span>{formatFullDate(userBirthday)}</span>
      <div
        className="flex h-[32px] w-[32px] items-center justify-center"
        onClick={handleClickOpenActionSheet}
      >
        <Ellipsis className="rotate-90 cursor-pointer" size={32} />
      </div>
      {isOpenActionSheet && (
        <ActionSheetContainer
          onClickCloseActionSheet={handleClickCloseActionSheet}
        >
          <ActionSheetItem
            label="회원 정보"
            onClick={handleClickRouteToUserProfile}
          />
          <ActionSheetItem
            label="회원 삭제"
            onClick={handleClickDeleteUser}
            className="text-red-500"
          />
        </ActionSheetContainer>
      )}
    </div>
  );
}
