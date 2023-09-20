"use client";

import { useIsLoginContext } from "@/features/login-form/providers/login-form";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type StudentContext = {
  loading: boolean;
};

const StudentContext = createContext<StudentContext>({
  loading: true,
});

export const StudentProvider = ({
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
    <StudentContext.Provider value={{ loading }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => useContext(StudentContext);
