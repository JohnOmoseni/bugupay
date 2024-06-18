"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import BackArrow from "@/components/BackArrow";

function Welcome() {
  const router = useRouter();

  return (
    <div className="relative grid w-full place-items-center p-4">
      <div className="group absolute left-3 top-3 transition-sm hover:scale-95 sm:left-6 sm:top-5">
        <Image
          src="/svgs/logo-full.svg"
          alt="Bugapay"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      <div className="pb-[2em] pt-[3em] sm:pt-[6%]">
        <div className="mb-4 flex items-start sm:absolute sm:left-4">
          <BackArrow />
        </div>
        <h2 className="flex-1 text-center sm:mt-8">
          What would you like to do
          <span className="text-secondary"> now?</span>
        </h2>
        <p className="mx-auto mt-2 max-w-[60ch] px-3 text-center text-lg">
          Don’t worry, you can come back to the other options later.
        </p>

        <ul className="flex-column my-8 gap-4">
          <Row />
          <Row />
          <Row />
          <Row />
        </ul>

        <Link
          href="#"
          className="mx-auto mt-8 block text-center font-medium transition-sm hover:underline"
        >
          Decide later
        </Link>
      </div>
    </div>
  );
}

export default Welcome;

const Row = () => (
  <li className="w-full rounded-md px-3 py-4 shadow-sm">
    <Link href="" className="row-flex w-full gap-3">
      <span className="grid h-[50px] w-[50px] place-items-center rounded-[50%] bg-background-200 p-1 shadow-sm">
        <Image
          src="/svgs/logo-yellow.svg"
          alt="Bugapay"
          width={40}
          height={40}
          className="!object-contain"
        />
      </span>
      <div className="flex-1">
        <h3 className="text-lg font-medium">Buy airtime</h3>
        <p className="lowercase tracking-wide">
          make faster and cheaper recharge
        </p>
      </div>
      <span className="">
        <IoIosArrowForward size={22} className="icon text-foreground" />
      </span>
    </Link>
  </li>
);
