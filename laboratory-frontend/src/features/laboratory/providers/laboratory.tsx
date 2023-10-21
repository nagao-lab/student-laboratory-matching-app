"use client";

import { useSessionContext } from "@/providers/session";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type LaboratoryContext = {
  loading: boolean;
};

const LaboratoryContext = createContext<LaboratoryContext>({
  loading: true,
});

export const LaboratoryProvider = ({
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
    <LaboratoryContext.Provider value={{ loading }}>
      {children}
    </LaboratoryContext.Provider>
  );
};

export const useLaboratoryContext = () => useContext(LaboratoryContext);
