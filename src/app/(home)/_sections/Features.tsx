"use client";

import Image from "next/image";
import Link from "next/link";
import RevealAnimate from "@/components/RevealAnim";
import { features } from "@/constants";
import { Button } from "@/components/Button";
import { twJoin } from "tailwind-merge";

function Features() {
  return (
    <div className="relative">
      <h2 className="px-2.5 text-center">
        Why Choose BuguPay for Your Bill Payments?
      </h2>
      <p className="mx-auto mt-2 max-w-[60ch] px-3 text-center text-xl">
        At BuguPay, we offer a comprehensive suite of bill payment services
        designed to make your financial life simpler and more convenient.
      </p>

      <ul className="flex-column mx-auto my-10 mt-[4em] w-full max-w-[1100px] gap-12 max-md:px-4 sm:gap-[6rem] md:mt-[6em]">
        {features.map((item, idx) => (
          <li
            key={idx}
            className={`${
              idx % 2 === 0 ? " " : "sm:!flex-row-reverse"
            } flex-column sm:row-flex relative gap-10 max-sm:flex-col-reverse lg:gap-[4em]`}
          >
            <RevealAnimate delay={0.8} className="relative">
              <div className="relative mx-auto h-[320px] w-full max-w-[400px] max-sm:min-w-[260px] sm:min-w-[300px]">
                <Image
                  src={item.imgSrc}
                  alt=""
                  fill
                  className="!object-contain"
                />
              </div>
              <div
                className={twJoin(
                  `absolute [background:radial-gradient(circle_at_center,_rgba(234,_88,_12,_0.8)_0,_rgba(234,_88,_12,_0)_50%)_no-repeat]`,
                  `left-1/2 top-[-50%] h-[200%] w-[200%] [mix-blend-mode:hard-light]`,
                  `opacity-20`,
                  `[transform:translateX(-50%)]`,
                )}
              />
            </RevealAnimate>

            <div className="self-start max-sm:pr-1.5 sm:mt-[3%]">
              <RevealAnimate>
                <h3 className="text-2xl font-semibold max-sm:max-w-[25ch] sm:text-3xl">
                  <span className="mr-1.5 text-base font-semibold">
                    0{idx + 1}.
                  </span>
                  {item.title}
                </h3>
              </RevealAnimate>
              <RevealAnimate>
                <p className="mt-3 text-lg sm:mt-5">{item.body}</p>
              </RevealAnimate>
              <RevealAnimate>
                <Link href="#" className="mt-12 block md:mt-16">
                  <Button title="Learn more" className="" />
                </Link>
              </RevealAnimate>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Features;
