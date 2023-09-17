"use client";

import { Controller } from "react-hook-form";
import { LockOpen } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLoginForm } from "../hooks/login-form";

export const LoginForm = () => {
  const router = useRouter();
  const { control, handleSubmit, errors, onSubmit } = useLoginForm();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "warning.main" }}>
          <LockOpen />
        </Avatar>
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="email"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                control={control}
                name="password"
                rules={{
                  required: true,
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    fullWidth
                    error={!!errors.name}
                    helperText={errors.name?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit(onSubmit)}
          >
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
  );
};
