import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import { RecoveryPasswordScheme } from "@/constant/authorization";
import { useMutation } from "@/lib/rest-query/use-mutation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { recovery } from "../recovery-api";

const RecoveryForm = ({ token }: { token: string }) => {
  const $recoveryPassword = useMutation(recovery);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(RecoveryPasswordScheme),
  });

  return (
    <div className="text-2xl leading-7 font-bold mb-2 flex flex-col gap-4 mt-4 w-full max-w-[450px]">
      <Form
        onSubmit={handleSubmit((form) =>
          $recoveryPassword.mutate(
            { ...form, token },
            {
              onSuccess: () => {
                navigate("/");
              },

              onError: ({ message }) => {
                console.log(message);
                navigate("/?flow=password-reset");
              },
            }
          )
        )}
        isLoading={$recoveryPassword.isLoading}
        submitButtonLabel="Reset Password"
        btnStyle="w-fit p-2"
        form={
          <div className="flex flex-col gap-4">
            <ControlledInput
              control={control}
              name="password"
              errors={errors.password}
              inputProps={{ type: "password" }}
              label="ახალი პაროლი"
            />
            <ControlledInput
              control={control}
              name="passwordConfirm"
              errors={errors.passwordConfirm}
              inputProps={{ type: "password" }}
              label="დაადასტურეთ პაროლი"
            />
          </div>
        }
      />
    </div>
  );
};

export default RecoveryForm;
