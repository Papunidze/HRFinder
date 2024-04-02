import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import Dialog from "@/components/appDialog";
import { useState } from "react";
import { PlusCircle } from "react-feather";
import { useForm } from "react-hook-form";
import defaultImg from "@/images/default.jpg";

const CreateUser = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [avatar, setAvatar] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
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

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    reset();
    setAvatar("");
  };

  return (
    <div className="relative inline-block w-full">
      <button
        className="button primary flex items-center justify-between text-white text-center"
        onClick={() => setIsDialogOpen(true)}
      >
        <PlusCircle color="white" />
        <span className="text-white py-2 mb-0.5 hidden md:block">Add User</span>
      </button>

      <Dialog
        isOpen={isDialogOpen}
        title="Create User"
        onClose={handleCloseDialog}
      >
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-4">
          <div className="flex flex-row items-center justify-start w-full gap-6">
            <img
              src={avatar || defaultImg}
              alt="Avatar"
              width={100}
              height={100}
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
                Upload Photo
              </label>

              <span className="text-gray-400 text-sm">
                JPG, GIF, or PNG. Max 1MB.
              </span>
            </div>
          </div>
          <Form
            onSubmit={handleSubmit((formData) => {
              console.log(formData); // Handle form submission, e.g., API call
              handleCloseDialog(); // Close the dialog after submission
            })}
            submitButtonLabel="Save"
            btnStyle="w-fit  px-5"
            form={
              <>
                <ControlledInput
                  control={control}
                  name="name"
                  inputProps={{ type: "text" }}
                  label="Name:"
                  errors={errors.name}
                />
                <ControlledInput
                  control={control}
                  name="email"
                  inputProps={{ type: "email" }}
                  label="Email:"
                  errors={errors.email}
                />
                <ControlledInput
                  control={control}
                  name="phoneNumber"
                  inputProps={{ type: "text" }}
                  label="Phone Number:"
                  errors={errors.phoneNumber}
                />
              </>
            }
          />
        </div>
      </Dialog>
    </div>
  );
};

export default CreateUser;
