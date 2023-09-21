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
  Avatar
} from "@mui/material";
import { getOptions } from "../options/student-register-form";
import { DatePicker } from "@mui/x-date-pickers";
import EditIcon from '@mui/icons-material/Edit';
import { MuiFileInput } from "mui-file-input";
import React from "react";

export const StudentRegisterForm = () => {
  const {
    setName,
    setGender,
    setUniversity,
    setGrade,
    setComment,
    setInterest,
    setBirthday,
    setPrefecture,
    setGpa,
    setImageUrl,
    setStatus,
    handleSubmit,
  } = useRegisterForm();

  const {
    genderOptions,
    universityOptions,
    majorOptions,
    gradeOptions,
    prefectureOptions,
    statusOptions,
  } = getOptions();

  const MuiDatePicker = DatePicker<Date>;

  const [file, setFile] = React.useState(null);
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
            学生登録
          </Typography>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="名前"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  options={genderOptions}
                  id="gender"
                  renderOption={(props, option) => (
                    <Box component="li" {...props} key={option.value}>
                      {option.label}
                    </Box>
                  )} 
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="性別"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  onChange={(_, selectedOption) =>
                    setGender(selectedOption?.value)
                  }
                />
              </Grid>
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
                <Autocomplete
                  options={majorOptions}
                  id="major"
                  renderOption={(props, option) => (
                    <Box component="li" {...props} key={option.value}>
                      {option.label}
                    </Box>
                  )} 
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="専攻"
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
                <Autocomplete
                  options={gradeOptions}
                  id="grade"
                  renderOption={(props, option) => (
                    <Box component="li" {...props} key={option.value}>
                      {option.label}
                    </Box>
                  )} 
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="学年"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  onChange={(_, selectedOption) => {
                    setGrade(selectedOption?.value);
                  }}
                />
              </Grid>

              <Grid item xs={30}>
                <TextField
                  label="ひとこと"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={10}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Grid>
              <Grid item xs={30}>
                <TextField
                  label="興味"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={10}
                  onChange={(e) => setInterest(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <MuiDatePicker
                  label="生年月日"
                  onChange={(date) => setBirthday(date)}
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Autocomplete
                  options={prefectureOptions}
                  id="prefecture"
                  renderOption={(props, option) => (
                    <Box component="li" {...props} key={option.value}>
                      {option.label}
                    </Box>
                  )} 
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="都道府県"
                      variant="outlined"
                      fullWidth
                    />
                  )}
                  onChange={(_, selectedOption) =>
                    setPrefecture(selectedOption?.value)
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="GPA"
                  variant="outlined"
                  fullWidth
                  onChange={(e) => setGpa(Number(e.target.value))}
                />
              </Grid>

              <Grid item xs={12}>
                <MuiFileInput
                placeholder="Choose a file"
                  value={file}
                  onChange={(file) => setFile(file)}
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
