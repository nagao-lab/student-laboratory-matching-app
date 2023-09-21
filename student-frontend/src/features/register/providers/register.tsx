"use client";

import { useAuthContext } from "@/providers/auth";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type RegisterContext = {
  loading: boolean;
};

const RegisterContext = createContext<RegisterContext>({
  loading: true,
});

export const RegisterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { userId } = useAuthContext();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId === "") {
      // router.push("/login");
    } else {
      setLoading(false);
    }
  }, [userId, router]);

  return (
    <RegisterContext.Provider value={{ loading }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => useContext(RegisterContext);
