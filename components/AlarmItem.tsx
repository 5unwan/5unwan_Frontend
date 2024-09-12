import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

interface AlarmItemProps {
  profileImageUrl: string;
  content: string;
  time: string;
  connectRequest: boolean;
}

export default function AlarmItem({
  profileImageUrl,
  content,
  time,
  connectRequest,
}: AlarmItemProps) {
  return (
    <div className="flex w-full items-start gap-6">
      <Avatar className="h-12 w-12">
        <AvatarImage src={profileImageUrl} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="w-full">
        <p className="text-sm">{content}</p>
        <p className="mt-2 text-xs text-sub-text">{time}</p>
        {connectRequest && (
          <div className="mt-3 flex items-center justify-start gap-2">
            <Button className="h-9 flex-grow border border-primary-user bg-transparent hover:bg-primary-user hover:text-red-600">
              거절
            </Button>
            <Button className="h-9 flex-grow border border-primary-user bg-transparent hover:bg-primary-user hover:text-third-text">
              수락
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
