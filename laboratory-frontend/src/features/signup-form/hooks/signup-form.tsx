"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignupLaboratoryMutation } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";

export const useSignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [signupLaboratoryMutation] = useSignupLaboratoryMutation();
  const { setUserId } = useSessionContext();

  const onSubmit = () => {
    console.log("signupLaboratory start");

    signupLaboratoryMutation({
      variables: {
        input: {
          email: email,
          password: password,
        },
      },
    })
      .then((res) => {
        if (res.data?.signupLaboratory?.id === undefined) {
          console.log("signupLaboratory error");
          return;
        }
        setUserId(res.data?.signupLaboratory?.id);
        router.push("/register");
      })
      .catch((err) => {
        alert("別のEmail Address・Passwordを入力してください");
        console.log("signupLaboratory error");
        console.log(err);
      });
  };

  return {
    setEmail,
    setPassword,
    onSubmit,
  };
};
