import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { User } from "lucide-react";

interface UserProfileViewImageProps {
  userProfileImageUrl: string;
}

export default function UserProfileViewImage({
  userProfileImageUrl,
}: UserProfileViewImageProps) {
  return (
    <article className="mt-[44px] flex items-center justify-center">
      <Avatar className="h-[108px] w-[108px]">
        <AvatarImage src={userProfileImageUrl} className="rounded-lg" />
        <AvatarFallback>
          <div className="flex h-[108px] w-[108px] items-end justify-center rounded-lg bg-sub-bg">
            <User size={100} className="text-sub-text" />
          </div>
        </AvatarFallback>
      </Avatar>
    </article>
  );
}
