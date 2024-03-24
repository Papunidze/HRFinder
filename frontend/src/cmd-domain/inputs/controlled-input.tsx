/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, Control, FieldError } from "react-hook-form";
import FormControl from "./form-control";

type ControlledInputProps = {
  control: Control<any>;
  name: string;
  inputProps?: object;
  label?: string;
  style?: string;
  errors?: FieldError | undefined;
};

export const ControlledInput = ({
  name,
  inputProps,
  label,
  control,
  style,
  errors,
}: ControlledInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormControl
          label={label}
          error={!!errors}
          helperText={errors?.message}
        >
          <input {...inputProps} {...field} className={`input ${style}`} />
        </FormControl>
      )}
    />
  );
};
