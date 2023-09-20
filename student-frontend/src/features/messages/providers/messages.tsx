"use client";

import { useIsLoginContext } from "@/features/login-form/providers/login-form";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type MessagesContext = {
  loading: boolean;
};

const MessagesContext = createContext<MessagesContext>({
  loading: true,
});

export const MessagesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isLogin } = useIsLoginContext();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLogin) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [isLogin, router]);

  return (
    <MessagesContext.Provider value={{ loading }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessagesContext = () => useContext(MessagesContext);
