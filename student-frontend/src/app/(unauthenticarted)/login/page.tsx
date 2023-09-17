// TODO loginページ（リクエストなし）
"use client";

import { NextPage } from "next";
import { LoginForm } from "src/features/login-form";

const Page: NextPage = () => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Page;
