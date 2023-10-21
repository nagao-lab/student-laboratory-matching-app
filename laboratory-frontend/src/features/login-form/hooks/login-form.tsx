"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginLaboratoryMutation } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loginLaboratoryMutation] = useLoginLaboratoryMutation();
  const { setUserId } = useSessionContext();

  const onSubmit = () => {
    console.log({
      email: email,
      password: password,
    });

    loginLaboratoryMutation({
      context: {
        headers: {
          mode: "cors",
          credentials: "include",
        },
      },
      variables: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        if (result.data?.loginLaboratory.id === undefined) {
          window.alert("ログインに失敗しました。");
          return;
        }
        setUserId(result.data?.loginLaboratory.id);
        router.push("/");
      })
      .catch((error) => {
        window.alert("ログインに失敗しました。");
        console.log(error);
      });
  };

  return {
    setEmail,
    setPassword,
    onSubmit,
  };
};
