"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginLaboratoryMutation } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";
import { writePairToDynamoDB, readUidFromDynamoDB } from "@/lib/dynamodb";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loginLaboratoryMutation] = useLoginLaboratoryMutation();
  const { setUserId } = useSessionContext();

  const onSubmit = async() => {
    const [sid, uid] = await loginLaboratoryMutation({
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
        return ["", ""];
      }
      setUserId(result.data?.loginLaboratory.id);

      // [TO DO] ここでcokkieからsidを取得する(?)
      const sid = Math.random().toString(32).substring(2);
      // あとで実装する

      return [sid, result.data?.loginLaboratory.id];
    })
    .catch((error) => {
      window.alert("ログインに失敗しました。");
      throw error;
    });

    if (sid === "" || uid === "") {
      window.alert("ログインに失敗しました。");
      return;
    }

    // dynamoDBに書き込み
    const putUid = uid;
    await writePairToDynamoDB(sid, putUid);

    // dynamoDBから読み込み (戻り値: uid)
    // 各種providerで使用する想定
    await readUidFromDynamoDB(sid)
      .then((uid)=>{
        console.log("success: uid = " + uid + " sid = " + sid);
        return uid;
      })
      .catch(()=>{
        console.log("error");
        return "";
      });

    router.push("/");
};

  return {
    setEmail,
    setPassword,
    onSubmit,
  };
};
