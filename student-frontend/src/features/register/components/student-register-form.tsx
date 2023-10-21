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
  Skeleton,
} from "@mui/material";
import { getOptions } from "../options/student-register-form";
import { DatePicker } from "@mui/x-date-pickers";
import EditIcon from "@mui/icons-material/Edit";
import { MuiFileInput } from "mui-file-input";
import React, { useState } from "react";
import { checkUploadable } from "@/utils/check-uploadable";
import { uploadedFileToComment } from "@/utils/uploaded-file-to-comment";
import { useRegisterContext } from "../providers/register";

const RegisterSkeleton = () => {
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
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={96} height={32} />
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Skeleton variant="rounded" width={376} height={56} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rounded" width={376} height={56} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rounded" width={376} height={56} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rounded" width={376} height={56} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rounded" width={376} height={56} />
              </Grid>
              <Grid item xs={30}>
                <Skeleton variant="rounded" width={376} height={263} />
              </Grid>
              <Grid item xs={30}>
                <Skeleton variant="rounded" width={376} height={263} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rounded" width={376} height={56} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rounded" width={376} height={56} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rounded" width={376} height={56} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rounded" width={376} height={56} />

                <Skeleton sx={{ width: "70%" }} />
              </Grid>
              <Grid item xs={12}>
                <Skeleton variant="rounded" width={376} height={56} />
              </Grid>
            </Grid>
            <Skeleton
              variant="rounded"
              width={376}
              height={37}
              sx={{ mt: 3, mb: 2 }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export const StudentRegisterForm = () => {
  const {
    setName,
    setGender,
    setUniversityId,
    setGrade,
    setComment,
    setInterest,
    setBirthday,
    setPrefectureId,
    setGpa,
    file,
    setFile,
    setStatus,
    setMajorIds,
    handleSubmit,
  } = useRegisterForm();

  const { genderOptions, gradeOptions, statusOptions } = getOptions();

  const { universities, prefectures, majors, loading } = useRegisterContext();

  const MuiDatePicker = DatePicker<Date>;
  const [newFile, setNewFile] = useState<File | null>(null);

  return (
    <>
      {loading ? (
        <RegisterSkeleton />
      ) : (
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
            <Avatar sx={{ m: 1, bgcolor: "success.main" }}>
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
                    options={universities}
                    id="university"
                    getOptionLabel={(option) => (option ? option.name : "")}
                    renderOption={(props, option) => (
                      <Box component="li" {...props} key={option.name}>
                        {option.name}
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
                      setUniversityId(selectedOption?.id)
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    options={majors}
                    id="major"
                    getOptionLabel={(option) => (option ? option.name : "")}
                    renderOption={(props, option) => (
                      <Box component="li" {...props} key={option.name}>
                        {option.name}
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
                      setMajorIds([selectedOption?.id!])
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
                  />
                </Grid>
                <Grid item xs={12}>
                  <Autocomplete
                    options={prefectures}
                    id="prefecture"
                    getOptionLabel={(option) => (option ? option.name : "")}
                    renderOption={(props, option) => (
                      <Box component="li" {...props} key={option.name}>
                        {option.name}
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
                      setPrefectureId(selectedOption?.id)
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
                    label="プロフィール画像"
                    placeholder="Choose a file"
                    value={newFile}
                    onChange={(newFile) => {
                      setNewFile(newFile);
                      setFile(newFile);
                    }}
                  />
                  <Typography variant="caption" component="div" gutterBottom>
                    jpg/png ファイルのみ、ファイルサイズは2MB以内。
                  </Typography>
                  {file &&
                    (checkUploadable(file) === 0 ||
                    checkUploadable(file) === 1 ? (
                      <Typography
                        variant="caption"
                        component="div"
                        color="error.main"
                        gutterBottom
                      >
                        {uploadedFileToComment(file)}
                      </Typography>
                    ) : (
                      <Typography
                        variant="caption"
                        component="div"
                        color="green"
                        gutterBottom
                      >
                        {uploadedFileToComment(file)}
                      </Typography>
                    ))}
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
      )}
    </>
  );
};
