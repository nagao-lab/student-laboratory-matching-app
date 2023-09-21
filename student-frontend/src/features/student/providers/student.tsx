"use client";

import { useSessionContext } from "@/providers/session";
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
  const { userId } = useSessionContext();
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
    <StudentContext.Provider value={{ loading }}>
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => useContext(StudentContext);
