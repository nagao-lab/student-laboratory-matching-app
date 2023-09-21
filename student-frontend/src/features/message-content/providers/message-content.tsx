"use client";

import { useAuthContext } from "@/providers/auth";
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
    <MessageContentContext.Provider value={{ loading }}>
      {children}
    </MessageContentContext.Provider>
  );
};

export const useMessageContentContext = () => useContext(MessageContentContext);
