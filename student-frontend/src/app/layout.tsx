"use client";

import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import { AuthProvider } from "@/providers/auth";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <ApolloProvider client={client}>
          <AuthProvider>{children}</AuthProvider>
        </ApolloProvider>
      </body>
    </html>
  );
};

export default Layout;
