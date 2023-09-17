// TODO signupページ（リクエストなし）: SignUpコンポーネントをレンダリングする
"use client";

import { NextPage } from "next";
import { SignupForm } from "@/features/signup-form/components/signup-form";

const Page: NextPage = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

export default Page;
