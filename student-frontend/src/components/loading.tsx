"use client";

import { CircularProgress, Box, Container, CssBaseline, Typography } from "@mui/material";

export const Loading = () => {
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
            <CircularProgress />
            <Typography component="h1" variant="h5">
              Loading
            </Typography>
            
          </Box>
        </Container>
    );
};
