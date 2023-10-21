"use client";

import { LinearProgress, Box, Container, CssBaseline, Typography } from "@mui/material";

export const LoadingBar = () => {
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              flexDirection: "column",
              alignItems: "center",   
            }}
          >
            <LinearProgress />  
          </Box>
          
          
          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",   
            }}
          >
            <Typography component="h1" variant="h5">
              Loading
            </Typography>
          </Box>
        </Container>
    );
};