import { SubmitHandler, useForm } from "react-hook-form";
import { LoginFormValues } from "../types/login-form";

export const useLoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    mode: "all",
    criteriaMode: "all",
    shouldFocusError: false,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    console.log({
      emil: data.email,
      password: data.password,
    });
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
};
