import { Dumbbell } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

interface AccountInformationProps {
  className?: string;
  name: string;
  email: string;
  profileImageUrl: string;
  onClickLogout: () => void;
}

export default function AccountInformation({
  className,
  name,
  email,
  profileImageUrl,
  onClickLogout,
}: AccountInformationProps) {
  const handleClickEditProfile = () => {};

  return (
    <section className={cn("w-full", className)}>
      <section className="flex w-full items-center justify-between">
        <div className="flex items-center gap-5">
          <Avatar className="h-16 w-16 rounded-[20px]">
            <AvatarImage src={profileImageUrl} alt="프로필 이미지" />
            <AvatarFallback className="h-16 w-16 rounded-[20px] bg-gray-300">
              <Dumbbell color="#707070" className="h-full w-full p-2" />
            </AvatarFallback>
          </Avatar>
          <p className="text-xl tracking-wide">{name}</p>
        </div>
        <Button
          variant={"outline"}
          className="h-[34px] rounded-xl hover:bg-primary-user"
          onClick={handleClickEditProfile}
        >
          프로필 설정
        </Button>
      </section>
      <section className="mt-12 w-full">
        <p>내 계정</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              alt="카카오 아이콘"
              src="/kakao_icon.webp"
              width={20}
              height={20}
            />
            <p>{email}</p>
          </div>
          <Button
            variant={"outline"}
            className="h-[34px] rounded-xl hover:bg-primary-user"
            onClick={onClickLogout}
          >
            로그아웃
          </Button>
        </div>
      </section>
    </section>
  );
}
