"use client";

// import { useRouter } from "next/navigation";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
// import { cookies } from "next/headers";

type SessionContext = {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
};

const SessionContext = createContext<SessionContext>({
  userId: "",
  setUserId: () => {},
});

// TODO : get userId from cookie
export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userId, setUserId] = useState("");

  return (
    <SessionContext.Provider value={{ userId, setUserId }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
