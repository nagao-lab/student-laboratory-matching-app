// TODO signupページ（リクエストなし）: SignUpFormコンポーネントを作成
import { 
    Avatar, 
    Box, 
    Button, 
    Container, 
    CssBaseline, 
    Grid, 
    TextField, 
    Typography, 
} from "@mui/material";
import {Person} from '@mui/icons-material';
import { useSignupForm } from "../hooks/signup-form";

export const SignupForm = () => {
    const {setEmail, setPassword, onSubmit} = useSignupForm();

    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <Person />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField 
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}/>
                </Grid>
                <Grid item xs={12}>
                  <TextField 
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}/>
                </Grid>                                  
              </Grid>
              <Button 
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={onSubmit}>
                Sign Up
              </Button>
            </Box>
          </Box>
        </Container>
    )
} 