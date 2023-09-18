// TODO loginページ（リクエストなし）
"use client";

import { NextPage } from "next";
import { LoginForm } from "@/features/login-form/components/login-form";

const Page: NextPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Page;
