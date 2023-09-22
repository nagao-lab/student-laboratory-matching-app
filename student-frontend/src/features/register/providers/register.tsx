"use client";

import { useUniversitiesQuery } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";
import { ApolloError } from "@apollo/client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect } from "react";

type University = {
  id: string;
  name: string;
};

type RegisterContext = {
  universities?: University[];
  loading: boolean;
  error: ApolloError | undefined;
};

const RegisterContext = createContext<RegisterContext>({
  universities: [],
  loading: true,
  error: undefined,
});

export const RegisterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { userId } = useSessionContext();
  const router = useRouter();
  const { data, loading, error } = useUniversitiesQuery();

  // TODO : get userId from cookie
  useEffect(() => {
    if (userId === "") {
      router.push("/login");
    }
  }, [userId, router]);

  const universities = data?.getAllUniversities;

  return (
    <RegisterContext.Provider value={{ universities, loading, error }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => useContext(RegisterContext);
