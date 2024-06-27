"use client";

import Link from "next/link";
import BasicTable from "@/components/BasicTable";
import { columns } from "@/constants/data/columns";
import { data } from "@/constants/data/mockTableData";
import { dashboardServices } from "@/constants";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { PiCurrencyNgnLight } from "react-icons/pi";
import { PiAsteriskBold } from "react-icons/pi";
import Image from "next/image";
import img from "@images/dashboard.png";

export default function Dashboard() {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="w-full px-3 sm:px-[3%]">
      <div className="grid min-h-[40vh] items-center py-8">
        <div className="row-flex-btwn gap-8">
          <div className="flex-1">
            <span className="row-flex ml-1 !justify-start gap-3">
              Main Balance
              <span
                className="icon"
                onClick={() => setShowBalance((prev) => !prev)}
              >
                {showBalance ? (
                  <FaRegEye size={22} className="" />
                ) : (
                  <FaRegEyeSlash size={22} className="" />
                )}
              </span>
            </span>
            {showBalance ? (
              <h1 className="row-flex !justify-start sm:text-7xl">
                <PiCurrencyNgnLight className="mt-1 w-[25px] text-foreground sm:w-[40px]" />
                100,000
              </h1>
            ) : (
              <div className="row-flex my-2 !justify-start gap-2">
                {Array(4)
                  .fill(null)
                  ?.map((item, idx) => (
                    <span
                      key={idx}
                      className="h-[35px] w-[35px] sm:h-[70px] sm:w-[70px]"
                    >
                      <PiAsteriskBold
                        key={idx}
                        className="h-full w-full text-foreground"
                      />
                    </span>
                  ))}
              </div>
            )}
            <p className="ml-1">
              Reward balance <span className="font-medium">15,000</span>
            </p>
          </div>
          <div className="relative mx-auto h-[250px] w-full min-w-[80px] max-w-[300px] max-[400px]:max-h-[100px] sm:max-w-[400px]">
            <Image src={img} alt="" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="my-6 sm:my-12">
        <h2 className="text-center">Services</h2>

        <ul className="mx-auto mt-8 grid max-w-[1200px] grid-cols-[repeat(2,_minmax(150px,1fr))] place-items-center gap-x-5 gap-y-8 px-2 sm:gap-12 md:grid-cols-[repeat(3,_minmax(150px,1fr))]">
          {dashboardServices?.map(({ icon: Icon, service, href }, idx) => {
            return (
              <li
                key={idx}
                className="group w-full rounded-xl border border-input px-12 py-10 shadow-sm md:py-12"
              >
                <Link
                  href={href}
                  className="flex-column w-full !items-center gap-4"
                >
                  <div className="row-flex relative mx-auto w-[50px] sm:w-[80px]">
                    <Icon className="h-full w-full !object-contain text-orange-700" />
                  </div>
                  <h3 className="capitalize transition-colors group-hover:font-bold group-hover:text-secondary">
                    {service}
                  </h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-12 sm:mt-14">
        <div className="row-flex-btwn relative gap-4 sm:mb-3">
          <h3 className="font-semibold sm:text-2xl">Transactions</h3>
          <Link
            href="#"
            className="transition-sm hover:text-secondary hover:underline"
          >
            Learn more
          </Link>
        </div>

        <BasicTable columns={columns} data={data} />
      </div>
    </div>
  );
}
