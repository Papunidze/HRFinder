import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import { updateUserSchema } from "@/constant/user";
import { useMutation } from "@/lib/rest-query/use-mutation";
import { useAuthContext } from "@/provider/loginProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Upload } from "react-feather";
import { useForm } from "react-hook-form";
import { updateUser } from "../setting-api";

const UpdateUser = () => {
  const { auth } = useAuthContext();

  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    register,
  } = useForm({
    defaultValues: {
      name: auth.user?.name || "",
      avatar: auth.user?.avatar || "",
    },
    resolver: yupResolver(updateUserSchema),
  });

  const avatar = watch("avatar");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string;
        setValue("avatar", imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  const $updateUser = useMutation(updateUser);

  return (
    <div className="w-full">
      <div className="flex flex-row items-center justify-start w-full gap-6">
        <img
          src={avatar}
          alt="Avatar"
          width={94}
          height={94}
          className="rounded-lg"
          {...register("avatar")}
        />

        <div className="flex flex-col items-start justify-center gap-4 relative">
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageUpload}
            id="image-upload-input"
          />
          <label
            htmlFor="image-upload-input"
            className="button primary cursor-pointer"
          >
            <Upload color="white" />
          </label>

          <span className="text-gray-400 text-sm">
            JPG, GIF or PNG. 1MB max.
          </span>
        </div>
      </div>
      <Form
        onSubmit={handleSubmit((form) =>
          $updateUser.mutate(
            { ...form },
            {
              onSuccess: () => {
                console.log("work");
              },
              onError: (error) => {
                console.log(form);
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
              name="name"
              inputProps={{ type: "text" }}
              label="სახელი:"
              errors={errors.name}
            />
          </>
        }
      />
    </div>
  );
};

export default UpdateUser;
