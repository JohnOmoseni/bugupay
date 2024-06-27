"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

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
        <div className="fixed inset-0 bg-white/80" style={{ zIndex: 999 }} />

        <Dialog.Panel
          className="relative grid h-dvh w-full place-items-center"
          style={{ zIndex: 9999 }}
        >
          <div className="group absolute left-3 top-3 animate-pulse transition-sm hover:scale-95 sm:left-6 sm:top-5">
            <Image
              src="/svgs/logo-full.svg"
              alt="Bugapay"
              width={35}
              height={30}
              className="object-contain"
            />
          </div>
          <Image
            src="/svgs/logo-yellow.svg"
            alt="Bugapay"
            width={100}
            height={30}
            className="object-contain"
          />
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
}
