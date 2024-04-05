import Dialog from "@/components/appDialog";
import UpdatePassword from "@/modules/settings/form/update-password";
import UpdateUser from "@/modules/settings/form/update-user-form";
import { useState } from "react";

const Settings = () => {
  const [isOpent, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block w-full">
      <a
        onClick={() => setIsOpen(true)}
        className="block px-4 py-2 cursor-pointer text-gray-800 rounded-md w-full hover:bg-gray-200"
      >
        პარამეტრები
      </a>

      <Dialog
        isOpen={isOpent}
        title={"პარამეტრები"}
        onClose={() => setIsOpen((prev) => !prev)}
      >
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-4">
          <UpdateUser />
          <div className="flex items-center w-full">
            <div className="flex-grow bg-gray-400 h-px"></div>
            <p className="mx-4 text-gray-500 text-sm lowercase font-montserrat">
              შეცვალეთ პაროლი
            </p>
            <div className="flex-grow bg-gray-400 h-px"></div>
          </div>
          <UpdatePassword />
        </div>
      </Dialog>
    </div>
  );
};

export default Settings;
