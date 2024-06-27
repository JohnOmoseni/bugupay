"use client";

import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "@/constants";
import { FeaturesType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 30, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const Card = ({ title, body, idx, vector, bgColor }: FeaturesType) => {
  const colors = [
    "bg-orange-300",
    "bg-green-300",
    "bg-blue-300",
    "bg-[#749ef8]",
    "bg-[#E4F6CB]",
    "bg-[#FFE7AA]",
  ];

  return (
    <Tilt options={defaultOptions}>
      <motion.div
        initial="hidden"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        custom={idx}
        className={`${
          colors[3 + idx]
        } border border-${bgColor}-500 flex-column select-none !items-center gap-4 rounded-xl px-4 py-6 drop-shadow-sm transition-sm`}
      >
        <div className="row-flex mx-auto w-[180px] md:w-[200px]">
          <Image src={vector} alt="" className="!object-contain" />
        </div>
        <h3 className="text-center text-xl leading-5">{title}</h3>
        <p className="relative mb-6 mt-4 line-clamp-5 px-2 text-center max-sm:min-w-[25ch]">
          {body}
        </p>
        <Link href="#">
          <Button title="Learn more" className="" />
        </Link>
      </motion.div>
    </Tilt>
  );
};

function Services() {
  return (
    <div className="relative">
      <h2 className="text-center">Our Services</h2>
      <p className="p-subtitle">
        At BuguPay, we offer a comprehensive suite of bill payment services
        designed to make your financial life simpler and more convenient.
      </p>

      <div className="row-flex mx-auto my-10 w-full max-w-[1100px] max-sm:px-2 sm:mt-[5em]">
        <motion.div
          initial="hidden"
          whileInView="animate"
          className="flex-column mx-auto justify-between gap-8 sm:grid sm:grid-cols-2 lg:gap-12"
        >
          {services.map((item, idx) => {
            return <Card {...item} key={idx} idx={idx} />;
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
