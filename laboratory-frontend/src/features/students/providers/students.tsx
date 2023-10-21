"use client";

import { useSessionContext } from "@/providers/session";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type StudentsContext = {
  loading: boolean;
};

const StudentsContext = createContext<StudentsContext>({
  loading: true,
});

export const StudentsProvider = ({
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
    <StudentsContext.Provider value={{ loading }}>
      {children}
    </StudentsContext.Provider>
  );
};

export const useStudentsContext = () => useContext(StudentsContext);
