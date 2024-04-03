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
      <button
        className="button primary flex items-center justify-between text-white text-center"
        onClick={() => navigate("/create")}
      >
        <PlusCircle color="white" />
        <span className="text-white py-2 mb-0.5 hidden md:block">Add User</span>
      </button>
      <MembersCard />
    </PageLayout>
  );
};

export default Members;
