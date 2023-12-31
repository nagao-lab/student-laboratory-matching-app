"use client";

import { useSessionContext } from "@/providers/session";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type LaboratoryDetailContext = {
  loading: boolean;
};

const LaboratoryDetailContext = createContext<LaboratoryDetailContext>({
  loading: true,
});

export const LaboratoryDetailProvider = ({
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
    <LaboratoryDetailContext.Provider value={{ loading }}>
      {children}
    </LaboratoryDetailContext.Provider>
  );
};

export const useLaboratoryDetailContext = () =>
  useContext(LaboratoryDetailContext);
