import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import Dialog from "@/components/appDialog";
import { useAuthContext } from "@/provider/loginProvider";
import { useState } from "react";
import { useForm } from "react-hook-form";

const Settings = () => {
  const { auth } = useAuthContext();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [avatar, setAvatar] = useState(auth.user?.avatar);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: auth.user?.name,
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string;

        setAvatar(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="relative inline-block w-full">
      <a
        onClick={() => setIsDialogOpen(true)}
        className="block px-4 py-2 cursor-pointer text-gray-800 rounded-md w-full hover:bg-gray-200"
      >
        პარამეტრები
      </a>
      <Dialog
        isOpen={isDialogOpen}
        title={"პარამეტრები"}
        onClose={() => setIsDialogOpen((prev) => !prev)}
      >
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-4">
          <div className="flex flex-row items-center justify-start w-full gap-6">
            <img
              src={avatar}
              alt="Avatar"
              width={94}
              height={94}
              className="rounded-lg"
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
                შეცვალეთ ფოტოსურათი
              </label>

              <span className="text-gray-400 text-sm">
                JPG, GIF or PNG. 1MB max.
              </span>
            </div>
          </div>
          <Form
            onSubmit={handleSubmit((form) => console.log(form))}
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
          <div className="flex items-center w-full">
            <div className="flex-grow bg-gray-400 h-px"></div>
            <p className="mx-4 text-gray-500 text-sm lowercase font-montserrat">
              Change Password
            </p>
            <div className="flex-grow bg-gray-400 h-px"></div>
          </div>
          <Form
            onSubmit={handleSubmit((form) => console.log(form))}
            submitButtonLabel="შენახვა"
            btnStyle="w-fit  px-5"
            form={
              <>
                <div className="flex gap-2 items-center">
                  <ControlledInput
                    control={control}
                    name="name"
                    inputProps={{ type: "password" }}
                    label="ახალი პაროლი:"
                    errors={errors.name}
                  />
                  <ControlledInput
                    control={control}
                    name="name"
                    inputProps={{ type: "password" }}
                    label="გაიმეორეთ პაროლი:"
                    errors={errors.name}
                  />
                </div>
              </>
            }
          />
        </div>
      </Dialog>
    </div>
  );
};

export default Settings;
