import { useForm } from "react-hook-form";
import Google from "@/images//google.png";
import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
    // setValue,
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  return (
    <div className="text-2xl leading-7 font-bold mb-2 flex flex-col gap-4 mt-4 w-full max-w-[450px]">
      <button className="button secondary flex items-center justify-center">
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
        onSubmit={handleSubmit((data) => console.log(data))}
        submitButtonLabel="რეგისტრაცია"
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
