"use client";

import { useAuthContext } from "@/providers/auth";
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
    <LaboratoryDetailContext.Provider value={{ loading }}>
      {children}
    </LaboratoryDetailContext.Provider>
  );
};

export const useLaboratoryDetailContext = () =>
  useContext(LaboratoryDetailContext);
