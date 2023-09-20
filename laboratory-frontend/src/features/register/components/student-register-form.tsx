"use client";

import { useRegisterForm } from "../hooks/student-register-form";
import {
  Container,
  Typography,
  CssBaseline,
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Avatar,
} from "@mui/material";
import { getOptions } from "../options/student-register-form";
import EditIcon from '@mui/icons-material/Edit';

export const StudentRegisterForm = () => {
  const {
    setUniversity,
    setName,
    setProfessor,
    setNumStudents,
    setComment,
    setStatus,
    setImageUrl,
    setLaboratoryUrl,
    handleSubmit,
  } = useRegisterForm();

  const {
    universityOptions,
    statusOptions,
  } = getOptions();

  return (
    <>
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
          <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
            <EditIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            研究室登録
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Autocomplete
                  options={universityOptions}
                  id="university"
                  renderOption={(props, option) => (
                    <Box component="li" {...props} key={option.value}>
                      {option.label}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="大学"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  onChange={(_, selectedOption) =>
                    setUniversity(selectedOption?.value)
                  }
                />
              </Grid>                            
              <Grid item xs={12}>
                <TextField
                  label="研究室名"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="指導教員"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setProfessor(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="学生数"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setNumStudents(Number(e.target.value));
                  }}
                />
              </Grid>                              
              <Grid item xs={12}>
                <TextField
                  label="ひとこと"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={10}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="プロフィール画像のURL"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="研究室のURL"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setLaboratoryUrl(e.target.value)}
                />
              </Grid>              
              <Grid item xs={12}>
                <Autocomplete
                  options={statusOptions}
                  id="status"
                  renderOption={(props, option) => (
                    <Box component="li" {...props} key={option.value}>
                      {option.label}
                    </Box>
                  )}                  
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="ステータス"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  onChange={(_, selectedOption) =>
                    setStatus(selectedOption?.value)
                  }
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => handleSubmit()}
            >
              登録
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};
