// TODO signupページ（リクエストなし）: SignUpコンポーネントをレンダリングする
"use client";
import { SignupForm } from "@/features/signup-form/components/signup-form";
import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

export default Page;
