import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Google from "@/images//google.png";
import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@/lib/rest-query/use-mutation";
import { signUpScheme } from "@/constant/authorization";
import { register } from "../sign-up-api";
import { useAuthContext } from "@/provider/loginProvider";

const SignUp = () => {
  const { setAuthData } = useAuthContext();
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
    // setValue,
  } = useForm({
    defaultValues: { email: "", password: "", passwordConfirm: "", name: "" },
    resolver: yupResolver(signUpScheme),
  });
  const $register = useMutation(register);

  return (
    <div className="text-2xl leading-7 font-bold flex flex-col gap-4  w-full max-w-[450px] md:mt-4 mt-8">
      <button
        className="button secondary flex items-center justify-center"
        onClick={() =>
          (window.location.href = `${
            import.meta.env.VITE_REACT_APP_LOCAL_URL
          }/auth/google`)
        }
      >
        <img src={Google} alt="Google" className="w-6" />
        დარეგისტრირდით Google-ით
      </button>
      <div className="flex items-center w-full">
        <div className=" flex-grow bg-gray-400 h-px"></div>
        <p className="mx-4 text-gray-500 text-sm lowercase">
          ან დარეგისტრირდით ელექტრონული ფოსტით
        </p>
        <div className=" flex-grow bg-gray-400 h-px"></div>
      </div>

      <Form
        onSubmit={handleSubmit((form) =>
          $register.mutate(
            { ...form },
            {
              onSuccess: ({ ...args }) => {
                setAuthData({ ...args });
                navigate(location.pathname);
              },
              onError: ({ message }) => {
                console.log(message);
              },
            }
          )
        )}
        submitButtonLabel="რეგისტრაცია"
        isLoading={$register.isLoading}
        form={
          <div className="relative flex flex-col gap-2">
            <ControlledInput
              control={control}
              name="name"
              inputProps={{ type: "text" }}
              label="სახელი"
            />
            <ControlledInput
              control={control}
              name="email"
              inputProps={{ type: "text" }}
              label="ელ.ფოსტა"
              errors={errors.email}
            />
            <ControlledInput
              control={control}
              name="password"
              label="პაროლი"
              inputProps={{ type: "password" }}
              errors={errors.password}
            />
            <ControlledInput
              control={control}
              name="passwordConfirm"
              label="გაიმეროეთ პაროლი"
              inputProps={{ type: "password" }}
            />
          </div>
        }
      />
      <p className="text-sm my-2 flex justify-center gap-1 font-montserrat items-center dark:text-clear">
        უკვე გაქვთ ანგარიში?
        <a className="link" onClick={() => navigate("/?flow=sign-in")}>
          ავტორიზაცია
        </a>
      </p>
    </div>
  );
};

export default SignUp;
