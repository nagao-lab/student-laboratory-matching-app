"use client";

import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  );
};

export default Layout;
