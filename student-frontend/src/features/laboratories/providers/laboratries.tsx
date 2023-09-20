import { useIsLoginContext } from "@/features/login-form/providers/login-form";
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
    <LaboratoriesContext.Provider value={{ loading }}>
      {children}
    </LaboratoriesContext.Provider>
  );
};

export const useLaboratoriesContext = () => useContext(LaboratoriesContext);
