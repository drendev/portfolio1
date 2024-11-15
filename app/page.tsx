import { BackgroundDesktop } from "@/components/bg-desktop";
import { Button } from "@/components/button";
import { ButtonReact } from "@/components/button-react";
import { ButtonCss } from "@/components/button-css";
import { ProfileImage } from "@/components/image";
import { Logo } from "@/components/logo";
import { ButtonDatabase } from "@/components/button-database";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-[100px] pb-[50px]">
      <div className="flex flex-col items-center w-full max-w-[1030px] pl-[15px] pr-[15px]">
        <div className="flex flex-row relative justify-between gap-[32px] items-center w-full max-w-[620px] pt-[96px] pb-[100px]">
          <div className="flex flex-col relative gap-[19px] items-start z-10">
            {/* drenswe logo */}
            <div className="flex justify-center pt-0 items-center">
              <Logo />
            </div>
            {/* drenswe welcome text */}
            <div className="box-border border-solid border-0 border-black leading-none max-w-[390px] my-0 py-0 text-[48px]">
              <span className="text-[#9f9b9b] font-normal">Hello!</span> I&apos;m Aldren
              <div className="justify-center items-center">
              <span className="border-solid border-0 border-black text-[48px] text-[#9f9b9b]">(</span>
              <span className="transform-none normal-num">0</span>
              <span className="pl-[4px] pr-[2px] text-indigo-400">→</span>
              <span className="transform-none normal-num">1</span>
              <span className="border-solid border-0 border-black text-[48px] text-[#9f9b9b]">) </span>
              software developer
              </div>
            </div>
            <Button link="mailto:contact@drenswe.dev">
              <Image src="/email.svg" alt="arrow" width={16} height={16} />
              <span className="font-semibold text-[12px]">contact@drenswe.dev</span>
            </Button>
          </div>
          <ProfileImage />
          <BackgroundDesktop />
          <div className="text-[#9c9c9c] tracking-[-0.1px] text-[11px] leading-[1.1] absolute inset-auto bottom-[50px] left-[51px] font-semibold font-sans">
                1+ year of coding
          </div>
          <div className="text-[#9c9c9c] text-[11px] leading-[1.1] absolute inset-auto bottom-[-25px] left-[240px] font-semibold font-sans">
                Responsive Designs
          </div>
          <div className="text-[#9c9c9c] text-[11px] leading-[1.2] absolute inset-auto bottom-[100px] left-[283px] font-semibold font-sans">
                Backend Services
          </div>
          <ButtonReact />
          <ButtonCss />
          <ButtonDatabase />
        </div>
      </div>
    </div>
  );
}
