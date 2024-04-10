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
import { yupResolver } from "@hookform/resolvers/yup";
import { membersScheme } from "@/constant/members";
import { useMutation } from "@/lib/rest-query/use-mutation";
import { AddMembers } from "../create-member-api";
import { useParams } from "react-router-dom";

const CreateUser = () => {
  const { id } = useParams();
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    register,
    watch,
  } = useForm({
    defaultValues: {
      id: id,
      about: "",
      experience: "",
      education: "",
      skills: [] as string[],
      availability: "",
      location: "",
      birthday: "",
      email: "",
      mobile: "",
      name: "",
      avatar: "",
      role: "",
    },
    resolver: yupResolver(membersScheme),
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
    const skill = watch("skills");
    const updatedSkills = e.target.checked
      ? [...skill, value]
      : skill.filter((skill) => skill !== value);

    setValue("skills", updatedSkills);
  };
  const $createMember = useMutation(AddMembers);

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
          onSubmit={handleSubmit((form) =>
            $createMember.mutate(
              { ...form },
              {
                onSuccess: () => {
                  console.log("succsses");
                },
                onError: ({ message }) => {
                  console.log(message);
                },
              }
            )
          )}
          submitButtonLabel="შენახვა"
          btnStyle={"max-w-40 self-end py-2 px-6"}
          form={
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <ControlledInput
                  control={control}
                  name="name"
                  inputProps={{ type: "text" }}
                  label="სახელი"
                  errors={errors.name}
                />
                <ControlledInput
                  control={control}
                  name="role"
                  inputProps={{ type: "text" }}
                  label="როლი"
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
                  errors={errors.birthday}
                  name="birthday"
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
              </div>
              <div className="flex justify-center mt-4 mb-2 flex-col">
                <label className="label mb-2 font-semibold">უნარები:</label>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {skills.map((skill) => (
                    <div key={skill.label} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id={skill.label}
                        name="skills"
                        value={skill.value}
                        onChange={handleSkillChange}
                        className=" mr-2 appearance-none w-4 h-4 rounded-md border-2 border-gray-300 checked:bg-primary checked:border-transparent focus:outline-none cursor-pointer"
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
