"use client";

import { useIsLoginContext } from "@/features/login-form/providers/login-form";
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
    <LaboratoryDetailContext.Provider value={{ loading }}>
      {children}
    </LaboratoryDetailContext.Provider>
  );
};

export const useLaboratoryDetailContext = () =>
  useContext(LaboratoryDetailContext);
