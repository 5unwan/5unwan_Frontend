"use client";

import React from "react";
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

interface UserProfileViewProps {
  profileImageUrl: string;
  userName: string;
  birthDate: string;
  height: string;
  weight: string;
  gender: string;
  purpose: string;
}

function renderUserInformation(label: string, value: string) {
  return (
    <div className="flex h-12 items-center justify-between">
      <span>{label}</span>
      <span className="text-sub-text">{value}</span>
    </div>
  );
}
export default function UserProfileView({
  profileImageUrl,
  userName,
  birthDate,
  height,
  weight,
  gender,
  purpose,
}: UserProfileViewProps) {
  return (
    <main className="w-full">
      <section className="relative flex h-12 items-center">
        <ArrowLeft size={32} className="absolute left-0 cursor-pointer" />
        <h1 className="mx-auto text-xl">{userName}</h1>
      </section>
      <article className="mt-[44px] flex items-center justify-center">
        <Avatar className="h-[108px] w-[108px]">
          <AvatarImage src={profileImageUrl} className="rounded-lg" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
      </article>

      <section className="mt-[45px]">
        <span className="text-lg">회원정보</span>
        <div className="mt-[27px] grid grid-rows-2 divide-y divide-[#303030]">
          {[
            ["생년월일", birthDate],
            ["키", height],
            ["몸무게", weight],
            ["성별", gender],
            ["운동목적", purpose],
          ].map(([label, value]) => renderUserInformation(label, value))}
        </div>
      </section>
    </main>
  );
}
