// TODO loginページ（リクエストなし）
"use client";
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, ThemeProvider, Typography, createTheme, Link } from "@mui/material";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import {LockOpen} from '@mui/icons-material';

const Page: NextPage = () => {
  const defaultTheme = createTheme();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    console.log({
      emil: data.get('email'),
      password: data.get('password'),
    });
  }

  const router = useRouter();

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'warning.main' }}>
              <LockOpen />
            </Avatar>
            <Typography component="h1" variant="h5">
              ログイン
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField 
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"/>
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="new-password"/>
                </Grid>                                  
              </Grid>
              <Button 
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => router.push("/")}>
                ログイン
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/signup" underline="none" variant="body2">
                    {"Sign upページはこちら"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Page;