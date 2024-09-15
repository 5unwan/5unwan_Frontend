import { MainLogo } from "@/components/MainLogo";
import UserTypeSelection from "@/components/UserTypeSelection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-main-bg">
      <div className="flex-col">
        <div className="relative">
          <figure>
            <MainLogo />
          </figure>
        </div>
        <UserTypeSelection />
      </div>
    </main>
  );
}
