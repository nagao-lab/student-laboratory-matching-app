"use client";

import { useSessionContext } from "@/providers/session";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type StudentDetailContext = {
  loading: boolean;
};

const StudentDetailContext = createContext<StudentDetailContext>({
  loading: true,
});

export const StudentDetailProvider = ({
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
    <StudentDetailContext.Provider value={{ loading }}>
      {children}
    </StudentDetailContext.Provider>
  );
};

export const useStudentDetailContext = () =>
  useContext(StudentDetailContext);
