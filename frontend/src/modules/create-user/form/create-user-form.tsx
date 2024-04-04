import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import React from "react";
import { useForm } from "react-hook-form";
import defaultImg from "@/images/default.jpg";
import { ControlledSelect } from "@/cmd-domain/inputs/controlled-select";
import years, {
  availabilityOptions,
  cities,
  educationOptions,
  experience,
  skills,
} from "@/modules/filter/options";

const CreateUser = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    register,
    watch,
  } = useForm({
    defaultValues: {
      about: "",
      experience: "",
      education: "",
      skills: "",
      availability: "",
      location: "",
      startYear: "",
      finishYear: "",
      email: "",
      mobile: "",
      name: "",
      avatar: "",
    },
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

  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    console.log(value);
  };

  return (
    <div className="relative inline-block w-full">
      <div className="flex flex-col items-center justify-center w-full gap-4 mt-4">
        <div className="flex flex-row items-center justify-start w-full gap-6">
          <img
            src={avatar || defaultImg}
            alt="Avatar"
            className="rounded-lg w-28 h-28 object-contain"
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
              ფოტოსურათის ათვირთვა
            </label>

            <span className="text-gray-400 text-sm">
              JPG, GIF, or PNG. Max 1MB.
            </span>
          </div>
        </div>

        <Form
          onSubmit={handleSubmit((data) => console.log(data))}
          submitButtonLabel="შენახვა"
          btnStyle={"max-w-40 self-end py-2 px-6"}
          form={
            <div className="grid md:grid-cols-3 gap-4 grid-cols-1 relative">
              <ControlledInput
                control={control}
                name="name"
                inputProps={{ type: "text" }}
                label="სახელი"
                errors={errors.name}
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
                name="mobile"
                inputProps={{ type: "text" }}
                label="ტელეფონის ნომერი"
                errors={errors.mobile}
              />
              <div className="mb-4">
                <label htmlFor="about" className="label">
                  აღწერა:
                </label>
                <textarea
                  id="about"
                  className="input resize-none max-h-36"
                  required
                  rows={4}
                  {...register("about")}
                />
              </div>
              <ControlledSelect
                control={control}
                errors={errors.startYear}
                name="startYear"
                label="დაბადების წელი:"
                defaultValue="დაბადების წელი"
                options={years}
                style="flex-1"
              />
              <ControlledSelect
                control={control}
                errors={errors.experience}
                name="experience"
                label="გამოცდილება:"
                options={experience}
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
                errors={errors.availability}
                name="availability"
                label="ხელმისაწვდომია:"
                options={availabilityOptions}
                defaultValue="აირჩიეთ ხელმისაწვდომობა"
              />
              <ControlledSelect
                control={control}
                errors={errors.location}
                name="location"
                label="მდებარეობა:"
                options={cities}
                defaultValue="აირჩიეთ მდებარეობა"
              />
              <div className=" flex w-full flex-col md:col-span-3 col-span-1">
                <label className="label mb-2">უნარები:</label>
                <div className="grid md:grid-cols-3 gap-4 grid-cols-1 p-2">
                  {skills.map((skill) => (
                    <div key={skill.label} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={skill.label}
                        name="skills"
                        value={skill.value}
                        onChange={handleSkillChange}
                        className="mr-2"
                      />
                      <label
                        htmlFor={skill.label}
                        className="font-medium leading-6"
                      >
                        {skill.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default CreateUser;
