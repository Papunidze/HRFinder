import { ReactElement, ReactNode } from "react";
import { Loader } from "react-feather";

type FormProps = {
  form: ReactNode;
  onSubmit: () => void;
  submitButtonLabel?: string;
  submitButtonProps?: object;
  isLoading?: boolean;
  btnStyle?: string;
  Icon?: string | ReactElement;
};

export const Form = ({
  form,
  onSubmit,
  submitButtonProps,
  submitButtonLabel,
  btnStyle,
  isLoading,
  Icon,
}: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-2">
        {form}

        <button
          disabled={isLoading}
          className={`button  mt-2 ${btnStyle}  ${
            isLoading
              ? " bg-primary bg-opacity-50 text-opacity-50 pointer-events-none text-white"
              : "primary"
          }`}
          type="submit"
          {...submitButtonProps}
        >
          {isLoading ? (
            <div>
              <Loader stroke="white" className="animate-spin" />
            </div>
          ) : (
            Icon && <div className="relative">{Icon}</div>
          )}
          {submitButtonLabel || "Submit"}
        </button>
      </div>
    </form>
  );
};
