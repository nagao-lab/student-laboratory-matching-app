// TODO フォームのデータ型を整える

"use client";

import { Controller } from "react-hook-form";
import { useRegisterForm } from "../hooks/student-register-form";
import { Box, Button, Stack, TextField } from "@mui/material";

export const StudentRegisterForm = () => {
  const { control, handleSubmit, errors, onSubmit } = useRegisterForm();

  return (
    <Stack spacing={2}>
      <Controller
        control={control}
        name="name"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="名前"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      {/* TODO : プルダウンにする */}
      <Controller
        control={control}
        name="gender"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="性別"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      {/* TODO : fetchしてAutoCompleteにする */}
      <Controller
        control={control}
        name="university"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="university"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="grade"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="grade"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      {/* TODO フォームの入力内容を複数行にする */}
      <Controller
        control={control}
        name="comment"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="comment"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      {/* TODO フォームの入力内容を複数行にする */}
      <Controller
        control={control}
        name="interest"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="interest"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      {/* TODO フィールドを日付選択できるようにする */}
      <Controller
        control={control}
        name="birthday"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="birthday"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="prefecture"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="prefecture"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      {/* TODO : fetchしてAutoCompleteにする */}
      <Controller
        control={control}
        name="gpa"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="gpa"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      {/* TODO フォルダからファイル選択できるようにする */}
      <Controller
        control={control}
        name="image_url"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="image_url"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      {/* TODO プルダウンで選択式にする */}
      <Controller
        control={control}
        name="status"
        rules={{
          required: true,
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label="status"
            variant="outlined"
            fullWidth
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />
      <Box sx={{ with: "2em" }}>
        <Button onClick={handleSubmit(onSubmit)} variant="contained">
          保存
        </Button>
      </Box>
    </Stack>
  );
};
