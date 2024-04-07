import PageLayout from "@/layout/pageLayout";
import Groups from "@/modules/groups/form/groups-form";
import CreateGroup from "@/modules/create-group/form/create-group";

const Home = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-2">
        <CreateGroup />

        <div className="flex items-center w-full">
          <div className=" flex-grow bg-gray-400 h-px"></div>
          <p className="mx-4 text-gray-500 text-sm lowercase">თქვენი ჯგუფები</p>
          <div className=" flex-grow bg-gray-400 h-px"></div>
        </div>

        <Groups />
      </div>
    </PageLayout>
  );
};

export default Home;
