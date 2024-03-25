import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Google from "@/images//google.png";
import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import { useNavigate } from "react-router-dom";
import { auth } from "@/modules/auth/sign-in/sign-in-api";
import { useMutation } from "@/lib/rest-query/use-mutation";
import { useAuthContext } from "@/provider/loginProvider";
import { signInSchema } from "@/constant/authorization";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
    // setValue,
  } = useForm({
    defaultValues: { email: "", password: "" },
    resolver: yupResolver(signInSchema),
  });
  const { setAuthData } = useAuthContext();

  const $auth = useMutation(auth);

  return (
    <div className="text-2xl leading-7 font-bold mb-2 flex flex-col gap-4 mt-4 w-full max-w-[450px]">
      <button className="button secondary flex items-center justify-center">
        <img src={Google} alt="Google" className="w-6" />
        შედით Google-ით
      </button>
      <div className="flex items-center w-full">
        <div className=" flex-grow bg-gray-400 h-px"></div>
        <p className="mx-4 text-gray-500 text-sm lowercase">
          ან შედით ელექტრონული ფოსტით
        </p>
        <div className=" flex-grow bg-gray-400 h-px"></div>
      </div>

      <Form
        onSubmit={handleSubmit((form) =>
          $auth.mutate(
            { ...form },
            {
              onSuccess: ({ ...args }) => {
                setAuthData({ ...args });
                navigate(location.pathname);
              },
              onError: ({ message }) => {
                console.log(message);
                // enqueueSnackbar(t(`response.${code}`), { variant: "error" });
              },
            }
          )
        )}
        submitButtonLabel="შესვლა"
        form={
          <div className="relative flex flex-col gap-4">
            <ControlledInput
              control={control}
              errors={errors.email}
              name="email"
              inputProps={{ type: "text" }}
              label="იმეილი"
            />
            <div className="relative">
              <a
                className="link right-1 absolute text-end top-2 "
                onClick={() => navigate("/?flow=password-reset")}
              >
                დაგავიწყდათ?
              </a>
              <ControlledInput
                control={control}
                errors={errors.password}
                name="password"
                label="პაროლი"
                inputProps={{ type: "password" }}
              />
            </div>
          </div>
        }
      />
      <p className="text-sm my-2 flex justify-center gap-1 font-montserrat items-center dark:text-clear">
        არ გაქვთ ანგარიში?
        <a className="link" onClick={() => navigate("/?flow=sign-up")}>
          დარეგისტრირდით
        </a>
      </p>
    </div>
  );
};

export default SignIn;
