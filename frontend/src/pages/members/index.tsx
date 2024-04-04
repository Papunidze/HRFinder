import PageLayout from "@/layout/pageLayout";
import Filter from "@/modules/filter/form/filter-form";
import MembersCard from "@/modules/members/form/members-form";
import { PlusCircle } from "react-feather";
import { useNavigate } from "react-router-dom";

const Members = () => {
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Filter />
      <div className="p-2 pl-4">
        <button
          className="button primary flex items-center justify-between text-white text-center"
          onClick={() => navigate("/create")}
        >
          <PlusCircle color="white" />
          <span className="text-white py-2 mb-0.5 hidden md:block">
            მომხმარებლის დამატება
          </span>
        </button>
      </div>
      <div className="flex items-center w-full">
        <div className=" flex-grow bg-gray-400 h-px"></div>
        <p className="mx-4 text-gray-500 text-sm lowercase">მოდერატორები</p>
        <div className=" flex-grow bg-gray-400 h-px"></div>
      </div>
      <MembersCard />
      <div className="flex items-center w-full">
        <div className=" flex-grow bg-gray-400 h-px"></div>
        <p className="mx-4 text-gray-500 text-sm lowercase">პერსონალი</p>
        <div className=" flex-grow bg-gray-400 h-px"></div>
      </div>
    </PageLayout>
  );
};

export default Members;
