import { Dialog as HandleDialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { X } from "react-feather";

interface DialogProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const Dialog = ({ children, isOpen, onClose, title }: DialogProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <HandleDialog
          as="div"
          className="relative z-[999] select-none "
          onClose={onClose}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <HandleDialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-ghost-10 p-6 text-left align-middle shadow-xl transition-all bg-white">
                  <HandleDialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6  flex w-full justify-between items-center capitalize"
                  >
                    {title}
                    <X
                      width={18}
                      className="cursor-pointer"
                      onClick={onClose}
                    />
                  </HandleDialog.Title>
                  {children}
                </HandleDialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </HandleDialog>
      </Transition>
    </>
  );
};

export default Dialog;
