import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Dispatch, SetStateAction, ReactNode } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  title?: ReactNode;
  desc?: ReactNode;
  children: ReactNode;
}

function Modal({ isOpen, setIsOpen, title, desc, children }: ModalProps) {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => null}
        className="relative"
        style={{ zIndex: 9999 }}
      >
        {/* <div className="fixed inset-0" style={{ zIndex: 998 }} /> */}

        <div className="fixed inset-0 flex w-screen items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <DialogPanel className="min-w-[310px] max-w-[500px] space-y-4 rounded-xl border border-gray-100 bg-gray-50 pb-4 shadow-md sm:min-w-[400px]">
            <div className="relative border-b border-gray-100 px-4 py-3">
              <span
                className="icon absolute right-2 top-2 cursor-pointer p-1 transition-sm active:scale-90"
                onClick={() => setIsOpen && setIsOpen(false)}
                title="close"
              >
                <IoClose size="20" className="" fill="#222" />
              </span>
              <DialogTitle className="py-0 text-left text-lg font-semibold">
                {title ?? "Confirm Transaction"}
              </DialogTitle>
              <Description className="pt-1 text-base leading-5">
                {desc}
              </Description>
            </div>

            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default Modal;
