"use client";

import { useSessionContext } from "@/providers/session";
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
  const { userId } = useSessionContext();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // TODO: userIDをcookieから取得する
  useEffect(() => {
    if (userId === "") {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [userId, router]);

  return (
    <MessageContentContext.Provider value={{ loading }}>
      {children}
    </MessageContentContext.Provider>
  );
};

export const useMessageContentContext = () => useContext(MessageContentContext);
