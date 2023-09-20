import { LoginProvider } from "@/features/login-form";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <LoginProvider>{children}</LoginProvider>
      </body>
    </html>
  );
};

export default Layout;
