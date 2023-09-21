"use client";

import { useAuthContext } from "@/providers/auth";
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
  const { userId } = useAuthContext();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => { // TODO: userIDで認証する
    if (userId === "") {
      // router.push("/login");
    } else {
      setLoading(false);
    }
  }, [userId, router]);

  return (
    <MessagesContext.Provider value={{ loading }}>
      {children}
    </MessagesContext.Provider>
  );
};

export const useMessagesContext = () => useContext(MessagesContext);
