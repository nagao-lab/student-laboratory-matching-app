'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useIsLoginContext } from "../providers/login-form";
import { useLoginStudentMutation } from "@/lib/graphql";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setIsLogin } = useIsLoginContext();
  const [loginStudentMutation] = useLoginStudentMutation();
  const {setUserID} = useIsLoginContext();

  const onSubmit = () => {
    console.log({
      email: email,
      password: password,
    });
    setIsLogin(true);

    loginStudentMutation({
      variables: 
        {
          email: email,
          password: password,
        }
    })
    .then((result) => {
      setUserID(result.data?.loginStudent.id)
      console.log(result)
    })
    .catch((error) => {
      console.log("error:", error)
    })


    router.push("/");
  };

  return {
    setEmail,
    setPassword,
    onSubmit,
  };
};
