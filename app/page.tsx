import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-main-bg flex min-h-screen items-center justify-center sm:w-full sm:flex-col md:w-full md:flex-col lg:w-full">
      <div className="flex-col">
        <div className="relative">
          <div className="absolute left-[17px] top-[35px] leading-[45px]">
            <p className="text-primary-user relative z-10 text-[35px] font-normal">
              타이틀
            </p>
            <p className="text-primary-user relative z-10 text-[35px] font-normal">
              카피라이트
            </p>
            <p className="text-primary-user relative z-10 text-[35px] font-bold">
              환영합니다!
            </p>

            <div className="top-[14px] w-[229px]">
              <p className="text-primary-user relative top-[14px] z-30 text-[17px] font-light">
                3초 가입으로 바로 시작해보세요
              </p>
            </div>
          </div>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/main.png"
            alt="Next.js Logo"
            width={340}
            height={585}
            priority
          />
        </div>
        <div className="flex-col">
          <Button className="bg-primary-user mt-[14px] block h-[57px] w-full rounded-[18px] text-[17px] font-bold text-black">
            회원으로 로그인
          </Button>
          <Button className="bg-primary-trainer mt-[14px] block h-[57px] w-full rounded-[18px] p-3 text-[17px] font-bold text-white">
            트레이너로 로그인
          </Button>
        </div>
      </div>
    </main>
  );
}
