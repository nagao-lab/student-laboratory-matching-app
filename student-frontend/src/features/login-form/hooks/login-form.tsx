import { useState } from "react";
import { useRouter } from "next/navigation";

export const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = () => {
    console.log({
      email: email,
      password: password,
    });

    router.push("/")
  }

  return {
    setEmail,
    setPassword,
    onSubmit,
  };
};
