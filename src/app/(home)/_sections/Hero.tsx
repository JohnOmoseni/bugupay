import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import hero from "@images/hero.png";
import TextGenerateEffect from "@/components/anims/TextGenerateEffect";
import AnimatedButton from "@/components/anims/MovingBorder";
import { URLS } from "@/constants";

function Hero() {
  return (
    <div className="hero flex-column md:row-flex bg- relative min-h-dvh w-full !items-center gap-8 pb-8 pt-12 md:pt-0 lg:mt-[-3%]">
      <div className="flex-1 px-3.5 md:pl-[max(2em,_6%)]">
        <h1 className="relative isolate max-md:text-center lg:whitespace-nowrap">
          Empower Your Finances
          <span className="block w-max rounded-ee-md pb-2 pl-1 pr-4 shadow-[3px_4px_1px_theme(colors.orange.500)] max-md:mx-auto sm:pr-8 md:shadow-[4px_4px_2px_theme(colors.orange.500)]">
            with <span className="font-bold text-secondary">BuguPay</span>
          </span>
        </h1>

        <TextGenerateEffect
          className="mt-8 max-w-[50ch] text-lg font-light max-md:mx-auto max-md:px-3 max-md:text-center"
          words="Experience the ease of managing your financial commitments with our intuitive platform. Whether it's utilities, subscriptions, or more, BuguPay streamlines the process, putting you in control."
        />

        <div className="flex-column sm:row-flex mt-12 !items-center gap-4 max-sm:!flex-wrap sm:gap-5 md:mt-14 md:!justify-start">
          <Link href={URLS.signup}>
            <Button
              title="Create free account"
              className="px-10 py-3.5 text-lg"
            />
          </Link>
          <Link href="#">
            <Button
              title="Contact Sales"
              className="border-2 border-secondary bg-transparent px-10 py-3.5 text-lg text-foreground"
            />
          </Link>
        </div>
      </div>

      <div className="row-flex relative -z-10 h-[400px] min-h-[340px] w-full min-w-[300px] md:min-w-[320px] lg:h-[630px]">
        <div className="relative -mt-[10%] h-full w-full">
          <Image src={hero} alt="hero" fill className="!object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
