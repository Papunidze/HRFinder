/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, Control, FieldError } from "react-hook-form";
import { Listbox } from "@headlessui/react";
import FormControl from "./form-control";

type ControlledSelectProps = {
  control: Control<any>;
  name: string;
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  label?: string;
  style?: string;
  errors?: FieldError | undefined;
  options: { label: string; value: string | number }[];
  defaultValue?: string;
};

export const ControlledSelect = ({
  name,
  label,
  control,
  errors,
  options,
  style,
  defaultValue,
}: ControlledSelectProps) => {
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
          <div className={`relative ${style} min-w-28`}>
            <Listbox value={field.value} onChange={field.onChange}>
              {({ open }) => (
                <>
                  <Listbox.Button
                    className={` block w-full rounded-lg text-base md:py-1 md:px-3 py-0.5 px-1.5 border leading-7 outline-none shadow-sm focus:ring-2 focus:ring-primary-light hover:ring-1 hover:ring-secondary-dark font-semibold text-left font-MarkGeo`}
                  >
                    {options.find((option) => option.value === field.value)
                      ?.label || defaultValue}
                  </Listbox.Button>
                  {open && (
                    <div className="absolute z-10 mt-0.5 w-full bg-secondary shadow-lg max-h-60 rounded-lg  text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none">
                      <Listbox.Options className="px-2 py-4">
                        {options.map((option) => (
                          <Listbox.Option
                            key={option.value}
                            value={option.value}
                            className={({ active }) =>
                              `${
                                active
                                  ? "bg-gray-200 rounded-md "
                                  : "text-gray-800"
                              } cursor-pointer select-none relative py-2 pl-3 pr-9 px-4`
                            }
                          >
                            <span
                              className={`block  font-MarkGeo font-semibold leading-7`}
                            >
                              {option.label}
                            </span>
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </div>
                  )}
                </>
              )}
            </Listbox>
          </div>
        </FormControl>
      )}
    />
  );
};
