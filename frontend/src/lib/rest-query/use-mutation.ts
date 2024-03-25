import {
  MutationFunction,
  useMutation as useQueryMutation,
  UseMutationOptions,
} from "react-query";

type ErrorResponse = { code: string; message: string };

export const useMutation = <
  OnSuccess,
  OnError = ErrorResponse,
  Variables = void,
  Context = unknown
>(
  mutationFn: MutationFunction<OnSuccess, Variables>,
  options?: Omit<
    UseMutationOptions<OnSuccess, OnError, Variables, Context>,
    "mutationFn"
  >
) => {
  return useQueryMutation<OnSuccess, OnError, Variables, Context>(
    mutationFn,
    options
  );
};
