import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import Dialog from "@/components/appDialog";
import { useState } from "react";
import { PlusCircle } from "react-feather";
import { useForm } from "react-hook-form";
import defaultImg from "@/images/default.jpg";

const CreateGroup = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
    register,
  } = useForm({
    defaultValues: {
      name: "",
      avatar: "",
    },
  });

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

  const avatar = watch("avatar");

  return (
    <div className="relative inline-block w-full">
      <button
        className="button primary flex items-center justify-between text-white text-center"
        onClick={() => setIsDialogOpen(true)}
      >
        <PlusCircle color="white" />
        <span className="text-white py-2 mb-0.5 hidden md:block">დამატება</span>
      </button>

      <Dialog
        isOpen={isDialogOpen}
        title="ჯგუფის შექმნა"
        onClose={() => setIsDialogOpen((prev) => !prev)}
      >
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-4">
          <div className="flex flex-row items-center justify-start w-full gap-6">
            <img
              src={avatar || defaultImg}
              alt="Avatar"
              width={100}
              height={100}
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
                ფოტოსურათის ატვირთვა
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
        </div>
      </Dialog>
    </div>
  );
};

export default CreateGroup;
