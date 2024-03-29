import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import { ControlledSelect } from "@/cmd-domain/inputs/controlled-select";
import { useForm } from "react-hook-form";

const Filter = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    // setValue,
  } = useForm({
    defaultValues: {
      birth: "",
      experience: "",
      education: "bachelor",
      skills: "",
      availability: "fullTime",
      location: "",
    },
  });

  const educationOptions = [
    { label: "ბაკალავრის ხარისხი", value: "bachelor" },
    { label: "მაგისტრის ხარისხი", value: "master" },
    { label: "დოქტორანტურა", value: "phd" },
  ];

  const availabilityOptions = [
    { label: "სრული განაკვეთი", value: "fullTime" },
    { label: "ნახევარ განაკვეთზე", value: "partTime" },
    { label: "დისტანციური", value: "remote" },
    { label: "ადგილზე", value: "onSite" },
  ];

  return (
    <div className="w-full mt-24 block bg-secondary rounded-md p-4 px-">
      <Form
        onSubmit={handleSubmit((data) => console.log(data))}
        submitButtonLabel="ძებნა"
        btnStyle={"max-w-40 self-end py-2 px-6"}
        form={
          <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
            <ControlledInput
              control={control}
              errors={errors.birth}
              name="birth"
              inputProps={{ type: "text" }}
              label="დაბადების წელი:"
            />
            <ControlledInput
              control={control}
              errors={errors.experience}
              name="experience"
              label="გამოცდილება:"
              inputProps={{ type: "text" }}
            />
            <ControlledSelect
              control={control}
              errors={errors.education}
              name="education"
              label="განათლება:"
              options={educationOptions}
            />
            <ControlledInput
              control={control}
              errors={errors.skills}
              name="skills"
              label="უნარები:"
              inputProps={{ type: "text" }}
            />

            <ControlledSelect
              control={control}
              errors={errors.availability}
              name="availability"
              label="ხელმისაწვდომია:"
              options={availabilityOptions}
            />

            <ControlledInput
              control={control}
              errors={errors.location}
              name="location"
              label="მდებარეობა:"
              inputProps={{ type: "text" }}
            />
          </div>
        }
      />
    </div>
  );
};

export default Filter;
