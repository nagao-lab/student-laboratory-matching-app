"use client";

import { createContext, useContext, useState } from "react";
// TODO: IsLoginを消す
type IsLoginContext = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  setUserID: (value: String | undefined) => void;
};

const IsLoginContext = createContext<IsLoginContext>({
  isLogin: false,
  setIsLogin: () => {},
  setUserID: () => {},
});

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [_, setUserID] = useState<String | undefined>(undefined);

  return (
    <IsLoginContext.Provider value={{ isLogin, setIsLogin, setUserID }}>
      {children}
    </IsLoginContext.Provider>
  );
};

export const useIsLoginContext = () => useContext(IsLoginContext);
