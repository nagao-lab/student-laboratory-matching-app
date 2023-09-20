"use client";

import { useIsLoginContext } from "@/features/login-form/providers/login-form";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type MessageContentContext = {
  loading: boolean;
};

const MessageContentContext = createContext<MessageContentContext>({
  loading: true,
});

export const MessageContentProvider = ({
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
    <MessageContentContext.Provider value={{ loading }}>
      {children}
    </MessageContentContext.Provider>
  );
};

export const useMessageContentContext = () => useContext(MessageContentContext);
