'use client'

import { LoginProvider } from "@/features/login-form";
import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
      <ApolloProvider client={client}>
        <LoginProvider>{children}</LoginProvider>
      </ApolloProvider>
      </body>
    </html>
  );
};

export default Layout;
