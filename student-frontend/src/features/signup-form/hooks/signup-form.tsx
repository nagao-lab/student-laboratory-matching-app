"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignupStudentMutation } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";

export const useSignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [signupStudentMutation] = useSignupStudentMutation();
  const { setUserId } = useSessionContext();

  const onSubmit = () => {
    console.log("signupStudent start");

    signupStudentMutation({
      variables: {
        input: {
          email: email,
          password: password,
        },
      },
    })
      .then((res) => {
        if (res.data?.signupStudent?.id === undefined) {
          console.log("signupStudent error");
          return;
        }
        setUserId(res.data?.signupStudent?.id);
        router.push("/register");
      })
      .catch((err) => {
        alert("別のEmail Address・Passwordを入力してください");
        console.log("signupStudent error");
        console.log(err);
      });
  };

  return {
    setEmail,
    setPassword,
    onSubmit,
  };
};
