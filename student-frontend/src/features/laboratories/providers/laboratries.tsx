"use client";

import { useSessionContext } from "@/providers/session";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type LaboratoriesContext = {
  loading: boolean;
};

const LaboratoriesContext = createContext<LaboratoriesContext>({
  loading: true,
});

export const LaboratoriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { userId } = useSessionContext();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // TODO : get userId from cookie
  useEffect(() => {
    if (userId === "") {
      router.push("/login");
    } else {
      console.log("userId", userId);
      setLoading(false);
    }
    console.log("userId", userId);
  }, [userId, router]);

  return (
    <LaboratoriesContext.Provider value={{ loading }}>
      {children}
    </LaboratoriesContext.Provider>
  );
};

export const useLaboratoriesContext = () => useContext(LaboratoriesContext);
