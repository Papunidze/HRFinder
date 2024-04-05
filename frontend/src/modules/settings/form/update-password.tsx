import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import { updatePasswordSchema } from "@/constant/user";
import { useMutation } from "@/lib/rest-query/use-mutation";
import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import { updatePassword } from "../setting-api";

const UpdatePassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { password: "", newPassword: "", newPasswordConfirm: "" },
    resolver: yupResolver(updatePasswordSchema),
  });

  const $updatePassword = useMutation(updatePassword);

  return (
    <Form
      onSubmit={handleSubmit((form) =>
        $updatePassword.mutate(
          { ...form },
          {
            onSuccess: () => {
              console.log("succses");
            },
            onError: (error) => {
              console.log(error);
            },
          }
        )
      )}
      submitButtonLabel="შენახვა"
      btnStyle="w-fit  px-5"
      form={
        <>
          <ControlledInput
            control={control}
            name="password"
            inputProps={{ type: "password" }}
            label="ძველი პაროლი:"
            errors={errors.password}
          />
          <ControlledInput
            control={control}
            name="newPassword"
            inputProps={{ type: "password" }}
            label="ახალი პაროლი:"
            errors={errors.newPassword}
          />
          <ControlledInput
            control={control}
            name="newPasswordConfirm"
            inputProps={{ type: "password" }}
            label="გაიმეორეთ პაროლი:"
            errors={errors.newPasswordConfirm}
          />
        </>
      }
    />
  );
};

export default UpdatePassword;
