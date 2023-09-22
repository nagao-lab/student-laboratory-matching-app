"use client";

import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import { SessionProvider } from "@/providers/session";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <ApolloProvider client={client}>
          <SessionProvider>{children}</SessionProvider>
        </ApolloProvider>
      </body>
    </html>
  );
};

export default Layout;
