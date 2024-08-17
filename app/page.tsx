import { MainLogo } from "@/components/MainLogo";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-main-bg">
      <div className="flex-col">
        <div className="relative">
          <figure>
            <MainLogo />
          </figure>
        </div>

        <section>
          <Button className="mt-[14px] h-[57px] w-full rounded-[18px] bg-primary-user text-[17px] font-bold text-black">
            회원으로 로그인
          </Button>
          <Button className="mt-[14px] h-[57px] w-full rounded-[18px] bg-primary-trainer p-3 text-[17px] font-bold text-white">
            트레이너로 로그인
          </Button>
        </section>
      </div>
    </main>
  );
}
