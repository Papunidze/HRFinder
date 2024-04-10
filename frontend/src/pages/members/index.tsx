import PageLayout from "@/layout/pageLayout";
import Filter from "@/modules/filter/form/filter-form";
import MembersFrom from "@/modules/members/form/group-members-from";
import { PlusCircle } from "react-feather";
import { useNavigate, useParams } from "react-router-dom";

const Members = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <PageLayout>
      <Filter />
      <div className="p-2 pl-4">
        <button
          className="button primary flex items-center justify-between text-white text-center"
          onClick={() => navigate(`/create/${id}`)}
        >
          <PlusCircle color="white" />
          <span className="text-white py-2 mb-0.5 hidden md:block">
            მომხმარებლის დამატება
          </span>
        </button>
        <MembersFrom />
      </div>
    </PageLayout>
  );
};

export default Members;
