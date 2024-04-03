import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import { useState } from "react";
import { PlusCircle } from "react-feather";
import { useForm } from "react-hook-form";
import defaultImg from "@/images/default.jpg";
import { ControlledSelect } from "@/cmd-domain/inputs/controlled-select";
import years, {
  availabilityOptions,
  cities,
  educationOptions,
  expreince,
  skills,
} from "@/modules/filter/options";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("");

  const {
    handleSubmit,
    control,
    formState: { errors },
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

  return (
    <div className="relative inline-block w-full">
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
            console.log(formData);
          })}
          submitButtonLabel="Save"
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
              <ControlledInput
                control={control}
                name="email"
                inputProps={{ type: "email" }}
                label="ელ.ფოსტა:"
                errors={errors.email}
              />
              <ControlledInput
                control={control}
                name="phoneNumber"
                inputProps={{ type: "text" }}
                label="ტელეფონის ნომერი:"
                errors={errors.phoneNumber}
              />
              <ControlledInput
                control={control}
                name="phoneNumber"
                inputProps={{ type: "text" }}
                label="პროფესია:"
                errors={errors.phoneNumber}
              />
              <ControlledInput
                control={control}
                name="phoneNumber"
                inputProps={{ type: "text" }}
                label="აღწერა:"
                errors={errors.phoneNumber}
              />
              <ControlledSelect
                control={control}
                errors={errors.birthday}
                name="experience"
                label="დაბადების წელი:"
                options={years}
                defaultValue="აირჩიეთ გამოცდილების წელბი"
              />
              <ControlledSelect
                control={control}
                errors={errors.experience}
                name="experience"
                label="გამოცდილება:"
                options={expreince}
                defaultValue="აირჩიეთ გამოცდილების წელბი"
              />
              <ControlledSelect
                control={control}
                errors={errors.education}
                name="education"
                label="განათლება:"
                options={educationOptions}
                defaultValue="აირჩიეთ განათლება"
              />
              <ControlledSelect
                control={control}
                errors={errors.skills}
                name="skills"
                label="უნარები:"
                defaultValue="აირჩიეთ უნარები"
                options={skills}
              />
              <ControlledSelect
                control={control}
                errors={errors.location}
                name="location"
                label="მდებარეობა:"
                options={cities}
                defaultValue="აირჩიეთ მდებარეობა"
              />
              <ControlledSelect
                control={control}
                errors={errors.availability}
                name="availability"
                label="ხელმისაწვდომია:"
                options={availabilityOptions}
                defaultValue="აირჩიეთ ხელმისაწვდომობა"
              />
            </>
          }
        />
      </div>
    </div>
  );
};

export default CreateUser;
