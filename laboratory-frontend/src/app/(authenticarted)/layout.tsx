'use client';

import { Box, AppBar, Toolbar, Typography, IconButton} from "@mui/material";
import {AccountCircle, Message} from '@mui/icons-material';
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

const Layout = ({ children }: { children: ReactNode }) => {
  // TODO 共通化ヘッダー : MuiのAppBarコンポーネントを配置してください
  // TODO 共通化ヘッダー : AppBarを上部固定にしてください
  // TODO 共通化ヘッダー : AppBarの中にタイトルを入れてください
  // TODO 共通化ヘッダー : タイトルをクリックするとルートディレクトリに遷移するようにしてください
  const router = useRouter();
  return(
    <>
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
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}> 
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
              onClick={() => router.push("/laboratory")}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </>
  );
};

export default Layout;