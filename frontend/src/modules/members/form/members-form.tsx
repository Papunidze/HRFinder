import { useAuthContext } from "@/provider/loginProvider";

const MembersCard = () => {
  const { auth } = useAuthContext();
  return (
    <div className="grid grid-cols-1 gap-4 mt-12 w-full md:grid-cols-2 lg:grid-cols-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex gap-2 cursor-pointer">
        <div className="p-4 flex items-center justify-center">
          <img
            className="object-contain rounded-md"
            src={auth.user?.avatar}
            alt={"test"}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{"Giga"}</div>
          <p className="text-gray-700 text-base">Experience: {"3"} years</p>
          <p className="text-gray-700 text-base">Skills: </p>
          <p className="text-gray-700 text-base">Education: {"2"}</p>
          <p className="text-gray-700 text-base">Location: {"ბათუმი"}</p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex gap-2 cursor-pointer">
        <div className="p-4 flex items-center justify-center">
          <img
            className="object-contain rounded-md"
            src={auth.user?.avatar}
            alt={"test"}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{"Giga"}</div>
          <p className="text-gray-700 text-base">Experience: {"3"} years</p>
          <p className="text-gray-700 text-base">Skills: </p>
          <p className="text-gray-700 text-base">Education: {"2"}</p>
          <p className="text-gray-700 text-base">Location: {"ბათუმი"}</p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex gap-2 cursor-pointer">
        <div className="p-4 flex items-center justify-center">
          <img
            className="object-contain rounded-md"
            src={auth.user?.avatar}
            alt={"test"}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{"Giga"}</div>
          <p className="text-gray-700 text-base">Experience: {"3"} years</p>
          <p className="text-gray-700 text-base">Skills: </p>
          <p className="text-gray-700 text-base">Education: {"2"}</p>
          <p className="text-gray-700 text-base">Location: {"ბათუმი"}</p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex gap-2 cursor-pointer">
        <div className="p-4 flex items-center justify-center">
          <img
            className="object-contain rounded-md"
            src={auth.user?.avatar}
            alt={"test"}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{"Giga"}</div>
          <p className="text-gray-700 text-base">Experience: {"3"} years</p>
          <p className="text-gray-700 text-base">Skills: </p>
          <p className="text-gray-700 text-base">Education: {"2"}</p>
          <p className="text-gray-700 text-base">Location: {"ბათუმი"}</p>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg flex gap-2 cursor-pointer">
        <div className="p-4 flex items-center justify-center">
          <img
            className="object-contain rounded-md"
            src={auth.user?.avatar}
            alt={"test"}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{"Giga"}</div>
          <p className="text-gray-700 text-base">Experience: {"3"} years</p>
          <p className="text-gray-700 text-base">Skills: </p>
          <p className="text-gray-700 text-base">Education: {"2"}</p>
          <p className="text-gray-700 text-base">Location: {"ბათუმი"}</p>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
