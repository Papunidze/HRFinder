import { ReactNode } from "react";

type FormProps = {
  form: ReactNode;
  onSubmit: () => void;
  submitButtonLabel?: string;
  submitButtonProps?: object;
  isLoading?: boolean;
  btnStyle?: string;
};

export const Form = ({
  form,
  onSubmit,
  submitButtonProps,
  submitButtonLabel,
  btnStyle,
}: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-2">
        {form}
        <button
          className={`button primary mt-2 ${btnStyle}`}
          type="submit"
          {...submitButtonProps}
        >
          {submitButtonLabel || "Submit"}
        </button>
      </div>
    </form>
  );
};
