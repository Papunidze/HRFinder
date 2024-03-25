import { Form } from "@/cmd-domain/form/form";
import { ControlledInput } from "@/cmd-domain/inputs/controlled-input";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const navigate = useNavigate();

  const {
    control,
    formState: { errors },
    handleSubmit,
    // setValue,
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  return (
    <div className="text-2xl leading-7 font-bold mb-2 flex flex-col gap-4 mt-4 max-w-[450px] w-full">
      <p className="text-xs text-gray-500 font-medium text-justify">
        შეიყვანეთ ელ.ფოსტის მისამართი, რომელიც გამოიყენეთ გაწევრიანებისას და
        ჩვენ გამოგიგზავნით ინსტრუქციები თქვენი პაროლის აღდგენისთვის.
      </p>
      <p className="text-xs text-gray-500 font-medium text-justify">
        უსაფრთხოების მიზნით, ჩვენ არ ვინახავთ თქვენს პაროლს. ასე რომ,
        დარწმუნებული იყავით რომ ჩვენ არასოდეს გამოგიგზავნით თქვენს პაროლს
        ელექტრონული ფოსტით.
      </p>

      <Form
        onSubmit={handleSubmit((data) => console.log(data))}
        submitButtonLabel="ინსტრუქციის გაგზავნა"
        form={
          <div className="relative flex flex-col gap-4">
            <ControlledInput
              control={control}
              name="email"
              inputProps={{ type: "text" }}
              label="ელ.ფოსტა"
              errors={errors.email}
            />
            <a
              className="link absolute right-2 top-2"
              onClick={() => navigate("/?flow=sign-in")}
            >
              ავტორიზაცია
            </a>
          </div>
        }
      />
    </div>
  );
};

export default PasswordReset;
