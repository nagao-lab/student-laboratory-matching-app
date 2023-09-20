import { useState } from "react";
import { useRouter } from "next/navigation";
import { useIsLoginContext } from "../providers/login-form";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { setIsLogin } = useIsLoginContext();

  const onSubmit = () => {
    console.log({
      email: email,
      password: password,
    });
    setIsLogin(true);

    router.push("/");
  };

  return {
    setEmail,
    setPassword,
    onSubmit,
  };
};
