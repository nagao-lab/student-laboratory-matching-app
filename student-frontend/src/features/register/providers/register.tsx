"use client";

import { useGetOptionsQuery } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";
import { ApolloError } from "@apollo/client";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect } from "react";

type University = {
  id: string;
  name: string;
};

type Prefecture = {
  id: string;
  name: string;
};

type Major = {
  id: string;
  name: string;
};

type RegisterContext = {
  universities: University[];
  prefectures: Prefecture[];
  majors: Major[];
  loading: boolean;
  error: ApolloError | undefined;
};

const RegisterContext = createContext<RegisterContext>({
  universities: [],
  prefectures: [],
  majors: [],
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
  const { data, loading, error } = useGetOptionsQuery();

  // TODO : get userId from cookie
  useEffect(() => {
    if (userId === "") {
      router.push("/login");
    }
  }, [userId, router]);

  const universities = data?.getAllUniversities as University[];
  const prefectures = data?.getAllPrefectures as Prefecture[];
  const majors = data?.getAllMajors as Major[];

  return (
    <RegisterContext.Provider
      value={{ universities, prefectures, majors, loading, error }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegisterContext = () => useContext(RegisterContext);
