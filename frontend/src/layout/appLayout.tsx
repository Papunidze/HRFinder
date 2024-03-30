import TopBar from "@/components/appTopBar";
import { useAuthContext } from "@/provider/loginProvider";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useAuthContext();
  return (
    <main className="h-screen max-h-[-webkit-fill-available] overflow-auto m-auto">
      {auth.type === "authenticated" && <TopBar />}
      <section className="h-full w-full container mx-auto p-2">
        {children}
      </section>
    </main>
  );
};

export default AppLayout;
