import { useLocation } from "react-router-dom";
import banner from "@/images/banner.svg";
import SignUp from "@/modules/auth/sign-up/form/sign-up-form";
import PasswordReset from "@/modules/auth/password-reset/form/password-reset-form";
import SignIn from "@/modules/auth/sign-in/form/sign-in-form";

const Auth = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const flow = params.get("flow");

  const getPageComponent = () => {
    switch (flow) {
      case "sign-up":
        return <SignUp />;
      case "password-reset":
        return <PasswordReset />;
      default:
        return <SignIn />;
    }
  };

  return (
    <section className="h-full w-full flex items-center justify-center ">
      <div className="bg-white flex w-full max-h-[750px] p-4 h-full container rounded-3xl shadow-lg gap-4">
        <div className="flex-1 flex items-center justify-evenly w-full flex-col relative">
          <div className="flex items-start justify-between w-full max-w-[450px] flex-col absolute top-6">
            <h1 className="leading-10  font-Poppins md:text-4xl text-3xl mb-2 font-[700] bg-gradient-1 text-transparent bg-clip-text">
              HrFinder
            </h1>
          </div>
          {getPageComponent()}
        </div>
        <div className="flex-1 md:block hidden bg-primary rounded-3xl shadow-md">
          <img
            src={banner}
            alt="Company Logo"
            className="object-cover rounded-3xl w-full h-full shadow-inner"
          />
        </div>
      </div>
    </section>
  );
};

export default Auth;
