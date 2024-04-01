import { Form } from "@/cmd-domain/form/form";
import { ControlledSelect } from "@/cmd-domain/inputs/controlled-select";
import { useForm } from "react-hook-form";
import years, {
  availabilityOptions,
  cities,
  educationOptions,
  expreince,
  skills,
} from "../options";
import { Search } from "react-feather";

const Filter = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      experience: "",
      education: "",
      skills: "",
      availability: "",
      location: "",
      startYear: "",
      finishYear: "",
    },
  });

  return (
    <div className="w-full mt-24 block bg-secondary rounded-md p-4 ">
      <Form
        onSubmit={handleSubmit((data) => console.log(data))}
        submitButtonLabel="ძებნა"
        btnStyle={"max-w-40 self-end py-2 px-6"}
        Icon={<Search stroke="white" />}
        form={
          <div className="grid md:grid-cols-3 gap-4 grid-cols-1">
            <div className="flex w-full items-start justify-center flex-col z-50 ">
              <label className="label">დაბადების წელი:</label>
              <div className="flex items-center gap-2 w-full -translate-y-[15px]">
                <ControlledSelect
                  control={control}
                  errors={errors.startYear}
                  name="startYear"
                  defaultValue="დან"
                  options={years}
                  style="flex-1"
                />
                <ControlledSelect
                  control={control}
                  errors={errors.finishYear}
                  name="finishYear"
                  options={years}
                  defaultValue="მდე"
                  style="flex-1"
                />
              </div>
            </div>

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
        }
      />
    </div>
  );
};

export default Filter;
