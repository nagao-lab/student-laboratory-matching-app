"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignupStudentMutation } from "@/lib/graphql";


export const useSignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [signupStudentMutation] = useSignupStudentMutation();
  

  const onSubmit = () => {
    console.log("signupStudent start");

    signupStudentMutation({
      variables: {
        input: {
          email: email,
          password: password
        },
      }
    }).then((res) => {
      console.log(res);
      console.log("signupStudent success");
      router.push("/register");
    }).catch((err) => {
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
