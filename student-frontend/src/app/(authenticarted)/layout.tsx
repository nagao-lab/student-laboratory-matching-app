"use client";

import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo/index";
import { ReactNode } from "react";
import { HeadrForm } from "@/features/header/header-form";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <HeadrForm />
        {children}
      </ApolloProvider>
    </>
  );
};

export default Layout;
