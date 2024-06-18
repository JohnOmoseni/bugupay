"use client";

import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineFileDownload } from "react-icons/md";
import { transaction } from "../data";

type ServiceSuccessProps = {
  service: string;
  serviceTxn: Record<string, any>;
};

function ServiceSuccess({ service = "Data", serviceTxn }: ServiceSuccessProps) {
  return (
    <div className="mx-auto grid h-full min-h-[500px] w-full max-w-[500px] place-items-center">
      <div className="w-full py-4 pb-8 max-sm:my-8 max-sm:px-4">
        <div className="flex-column !items-center">
          <div className="relative flex h-[120px] w-[120px] shrink-0 overflow-hidden rounded-sm">
            <Image
              src="/svgs/success.svg"
              alt="success"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="my-3 text-center text-xl font-medium">
            {service} Purchase successful!
          </h3>
        </div>

        <div className="mb-10 mt-12 rounded-lg bg-background-100 px-3.5 py-5">
          <ul className="flex-column gap-2.5">
            {Object.keys(transaction as any)?.map((key, idx) => {
              return (
                <li className="row-flex-btwn w-full gap-6" key={idx}>
                  <span className="font-light capitalize text-gray">
                    {key}:
                  </span>
                  <p className="font-normal capitalize">
                    {transaction[key] ? transaction[key] : "nil"}
                  </p>
                </li>
              );
            })}
          </ul>

          <Button
            title="Download Receipt"
            dir="left"
            icon={MdOutlineFileDownload}
            className="mx-auto mt-8 w-[80%] border border-secondary bg-transparent px-14 uppercase tracking-wider text-secondary hover:bg-background"
          />
        </div>

        <Link href="/dashboard" className="">
          <Button title="Go back Home" className="mt-16 w-full py-3 text-lg" />
        </Link>
      </div>
    </div>
  );
}

export default ServiceSuccess;
