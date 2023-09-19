"use client";

import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { AccountCircle, Message } from "@mui/icons-material";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo/index";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  return (
    <>
      <ApolloProvider client={client}>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                タイトル
              </Typography>

              <Box sx={{ flexGrow: 1 }} />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => router.push("/messages")}
                color="inherit"
              >
                <Message />
              </IconButton>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => router.push("/student")}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        {children}
      </ApolloProvider>
    </>
  );
};

export default Layout;
