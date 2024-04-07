import { Routes } from "react-router-dom";
import AppLayout from "@/layout/appLayout";
import { generateLazyRoutes } from "@/lib/lazy-route";
import { usePermissions } from "@/lib/permissions";
import { AuthType, useAuthContext } from "./provider/loginProvider";

const App = () => {
  const { auth } = useAuthContext();

  const permissions = usePermissions();
  const generateRoutes = generateLazyRoutes(permissions);

  if (auth.type === AuthType.NULL) return null;

  return (
    <AppLayout>
      <Routes>{generateRoutes}</Routes>
    </AppLayout>
  );
};

export default App;
