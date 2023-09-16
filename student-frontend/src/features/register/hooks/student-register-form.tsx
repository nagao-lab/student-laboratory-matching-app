"use client";

import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { RegisterFormValues } from "../types/student-register-form";

export const useRegisterForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    mode: "all",
    criteriaMode: "all",
    shouldFocusError: false,
    defaultValues: {
      name: "",
      gender: 0,
      university: "",
      grade: 1,
      comment: "",
      interest: "",
      birthday: "",
      prefecture: "",
      gpa: 3,
      image_url: "",
      status: 0,
    },
  });

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log(data);
    router.push("/");
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
};
