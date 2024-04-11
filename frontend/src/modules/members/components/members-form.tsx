import Poppins from "@/components/appPoppins";
import { MembersForm } from "@/modules/create-user/create-member-api";
import { useNavigate } from "react-router-dom";

type MembersFormWithoutId = Omit<MembersForm, "id"> & {
  _id: MembersForm["id"];
};

interface Members {
  element: MembersFormWithoutId;
  id: string;
}

const MembersCard = ({ element, id }: Members) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1  lg:grid-cols-4 gap-4 border border-gray-200 shadow-sm p-4 relative">
      <div className="flex items-center justify-start gap-4">
        <img
          src={element.avatar}
          alt={element.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold font-Poppins">
            {element.name}
          </h2>
          <label className="text-gray-500">{element.experience}</label>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-semibold font-Poppins">
          {element.email}
        </h2>
        <label className="text-gray-500">{element.mobile}</label>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-base font-semibold font-Poppins">
          {element.availability}
        </h2>
        <label className="text-gray-500">{element.location}</label>
      </div>
      <button
        className="button bg-transparent shadow-sm border border-gray-200 ml-4"
        onClick={() => navigate(`/user/${element._id}`)}
      >
        დეტალები
      </button>
      <div className="absolute right-0 top-2">
        <Poppins
          list={[
            {
              label: "ჩასწორება",
              fn: () => navigate(`/create/${id}?flow=${element._id}`),
            },
            { label: "წაშლა" },
          ]}
        />
      </div>
    </div>
  );
};

export default MembersCard;
