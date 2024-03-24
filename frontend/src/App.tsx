import { Routes } from "react-router-dom";
import AppLayout from "@/layout/appLayout";
import { generateLazyRoutes } from "@/lib/lazy-route";
import { usePermissions } from "@/lib/permissions";

const App = () => {
  const permissions = usePermissions();
  const generateRoutes = generateLazyRoutes(permissions);

  return (
    <AppLayout>
      <Routes>{generateRoutes}</Routes>
    </AppLayout>
  );
};

export default App;
