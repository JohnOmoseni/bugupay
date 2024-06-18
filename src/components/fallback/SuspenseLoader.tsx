"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import logo from "@svgs/logo-full.svg";
import loading from "@svgs/loading-icon.svg";

export default function LoadingModal() {
  return (
    <Transition
      show={true}
      as={Fragment}
      enter="ease-out duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog open={true} onClose={() => false}>
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-white/90" style={{ zIndex: 9999 }} />

        <Dialog.Panel
          className="relative grid h-dvh w-full place-items-center"
          style={{ zIndex: 99999 }}
        >
          <div className="group absolute left-3 top-3 animate-pulse transition-sm hover:scale-95 sm:left-6 sm:top-5">
            <Image
              src={logo}
              alt="iWebChat"
              width={100}
              height={30}
              priority
              className="object-contain"
            />
          </div>

          <div className="h-[300px] w-[300px] animate-pulse transition-sm">
            <Image
              src={loading}
              alt=""
              fill
              priority
              className="object-contain"
            />
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}
