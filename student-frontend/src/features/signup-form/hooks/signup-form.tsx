import { SubmitHandler, useForm } from "react-hook-form";
import { SignupFormValues } from "../types/signup-form";
import { useRouter } from "next/navigation";


export const useSignupForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: "all",
    criteriaMode: "all",
    shouldFocusError: false,
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    router.push("/")
    console.log({
      emil: data.email,
      password: data.password,
    });
  };

  return {
    control,
    handleSubmit,
    onSubmit,
    errors
  };
};