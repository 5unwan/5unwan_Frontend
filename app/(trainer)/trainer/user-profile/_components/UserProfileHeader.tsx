import { ArrowLeft } from "lucide-react";

interface UserProfileHeaderProps {
  userName: string;
}

export default function UserProfileHeader({
  userName,
}: UserProfileHeaderProps) {
  return (
    <section className="relative flex h-12 items-center">
      <ArrowLeft size={32} className="absolute left-0 cursor-pointer" />
      <h1 className="mx-auto text-xl">{userName}</h1>
    </section>
  );
}
