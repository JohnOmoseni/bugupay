"use client";

import { Button } from "@/components/Button";
import Modal from "@/components/Modal";
import AvatarWrapper from "@/components/ui/components/Avatar";
import { URLS } from "@/constants";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function ConfirmTxn() {
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) {
      router.back();
    }
  }, [isOpen]);

  const onConfirmClick = () => {
    router.push(URLS["service-success"]);
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="p-6 sm:px-12 sm:py-8">
        <div className="flex-column !items-center">
          <AvatarWrapper />
        </div>

        <div className="mb-12 mt-4 rounded-2xl bg-background-200 px-3.5 py-4">
          <div className="flex-column gap-2.5">
            <div className="row-flex-btwn w-full gap-6">
              <span className="font-light">Description:</span>
              <p className="font-medium">Data Purchase</p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex flex-col items-center">
          <p className="text-center font-semibold">Enter Transaction PIN</p>
          <div className="row-flex-btwn my-3 gap-4">
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-background-200"></div>
          </div>
        </div>

        <Button
          title="Confirm"
          className="mt-6 w-full py-3 text-lg"
          onClick={onConfirmClick}
        />
      </div>
    </Modal>
  );
}

export default ConfirmTxn;
