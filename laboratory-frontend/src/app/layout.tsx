import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
