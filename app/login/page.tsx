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
            className="mt-[14px] h-[57px] cursor-pointer rounded-[18px] bg-primary-user text-[17px] font-bold text-black"
            width={340}
            height={57}
          />
          <section className="mt-[14px] text-center text-[13px] text-sub-text">
            <span className="">
              로그인하시면 아래 내용에 동의하는 것으로 간주됩니다.
            </span>
            <section className="mt-[14px] flex justify-evenly">
              <a href="" className="border-b-[0.5px]">
                개인정보처리방침
              </a>
              <a href="" className="border-b-[0.5px]">
                이용약관
              </a>
            </section>
          </section>
        </section>
      </div>
    </main>
  );
}
