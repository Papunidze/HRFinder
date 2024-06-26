import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import Dialog from "@/components/appDialog";
import { useState } from "react";
import { PlusCircle, Upload } from "react-feather";
import { useForm } from "react-hook-form";
import defaultImg from "@/images/default.jpg";
import { useMutation, useQueryClient } from "react-query";
import { createGroup, editGroup } from "../create-group-api";
import { EditState } from "@/modules/groups/form/groups-form";

interface GroupProps {
  isEdit?: EditState;
  setIsEdit?: React.Dispatch<React.SetStateAction<EditState>>;
}

const CreateGroup = ({ isEdit, setIsEdit }: GroupProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const queryClient = useQueryClient();

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    watch,
    register,
  } = useForm({
    defaultValues: {
      name: isEdit?.name || "",
      image: isEdit?.image || "",
    },
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageDataUrl = event.target?.result as string;
        setValue("image", imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const avatar = watch("image");

  const $request = useMutation(isEdit ? editGroup : createGroup, {
    onSuccess: () => {
      setIsDialogOpen(false);
      setIsEdit?.((prevState) => ({ ...prevState, isOpen: false }));
      queryClient.invalidateQueries("groups");
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });

  const handleClose = () => {
    setValue("image", "");
    setValue("name", "");
    setIsDialogOpen(false);
    setIsEdit?.((prevState) => ({ ...prevState, isOpen: false }));
  };

  return (
    <div className="relative inline-block w-full">
      {!isEdit && (
        <button
          className={` button primary  items-center justify-between text-white text-center flex mb-2`}
          onClick={() => setIsDialogOpen(true)}
        >
          <PlusCircle color="white" />
          <span className="text-white py-2 mb-0.5 block">
            ახალი ჯგუფის დამატება
          </span>
        </button>
      )}

      <Dialog
        isOpen={isEdit?.isOpen || isDialogOpen}
        title="ჯგუფის შექმნა"
        onClose={handleClose}
      >
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-4">
          <div className="flex flex-row items-center justify-start w-full gap-6">
            <img
              src={avatar || defaultImg}
              alt="Avatar"
              width={100}
              height={100}
              className="rounded-lg"
              {...register("image")}
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
              $request.mutate({ ...form, id: isEdit?.id })
            )}
            submitButtonLabel="შენახვა"
            btnStyle="w-fit  px-5"
            form={
              <ControlledInput
                control={control}
                name="name"
                inputProps={{ type: "text" }}
                label="სახელი:"
                errors={errors.name}
              />
            }
          />
        </div>
      </Dialog>
    </div>
  );
};

export default CreateGroup;
