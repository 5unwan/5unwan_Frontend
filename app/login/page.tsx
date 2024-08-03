import { MainLogo } from "@/components/MainLogo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function () {
  return (
    <main className="flex min-h-screen items-center justify-center bg-main-bg sm:w-full sm:flex-col md:w-full md:flex-col lg:w-full">
      <div className="flex-col">
        <div className="relative">
          <figure>
            <MainLogo />
          </figure>
        </div>

        <section>
          <Image
            src="/kakao_login_large_wide.webp"
            alt="social_kakao"
            className="mt-[14px] h-[57px] cursor-pointer rounded-[18px] bg-primary-user text-[17px] font-bold text-black"
            width={340}
            height={57}
          />
          <section className="mt-[14px] h-[57px] text-center text-[13px] text-sub-text"></section>
        </section>
      </div>
    </main>
  );
}
