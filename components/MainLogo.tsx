import Image from "next/image";

export const MainLogo = () => {
  return (
    <>
      <div className="absolute left-[17px] top-[35px] leading-[45px]">
        <p className="relative z-10 text-[35px] font-normal text-primary-user">
          오운완에
        </p>
        <p className="relative z-10 text-[35px] font-normal text-primary-user">
          오신 것을
        </p>
        <p className="relative z-10 text-[35px] font-bold text-primary-user">
          환영합니다!
        </p>

        <div className="top-[14px] w-[229px]">
          <p className="relative top-[14px] z-30 text-[17px] font-light text-primary-user">
            3초 가입으로 바로 시작해보세요
          </p>
        </div>
      </div>

      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/5unwanMain.webp"
        alt="5unwan Logo"
        width={340}
        height={585}
        priority
      />
    </>
  );
};
