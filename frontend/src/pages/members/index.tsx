import CreateUser from "@/modules/create-user/form/create-user-form";
import Filter from "@/modules/filter/form/filter-form";
import MembersCard from "@/modules/members/form/members-form";

const Members = () => {
  return (
    <div>
      <Filter />
      <CreateUser />
      <MembersCard />
    </div>
  );
};

export default Members;
