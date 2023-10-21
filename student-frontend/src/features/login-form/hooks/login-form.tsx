"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginStudentMutation } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loginStudentMutation] = useLoginStudentMutation();
  const { setUserId } = useSessionContext();

  const onSubmit = () => {
    loginStudentMutation({
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
        if (result.data?.loginStudent.id === undefined) {
          window.alert("ログインに失敗しました。");
          return;
        }
        setUserId(result.data?.loginStudent.id);
        router.push("/");
      })
      .catch((error) => {
        window.alert("ログインに失敗しました。");
        throw error;
      });
  };

  return {
    setEmail,
    setPassword,
    onSubmit,
  };
};
