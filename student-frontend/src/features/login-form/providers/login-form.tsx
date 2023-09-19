"use client";

import { createContext, useContext, useState } from "react";

type IsLoginContext = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

const IsLoginContext = createContext<IsLoginContext>({
  isLogin: false,
  setIsLogin: () => {},
});

export const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);

  return (
    <IsLoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </IsLoginContext.Provider>
  );
};

export const useIsLoginContext = () => useContext(IsLoginContext);
