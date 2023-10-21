"use client";

import { Button } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useFavoriteStudent } from "@/features/students/hooks/students";

type Props = {
  studentId: string;
};

export const ChangeStatusToIconButton = ({ studentId }: Props) => {
  const { clickHandler } = useFavoriteStudent(studentId);

  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: "#ff00ff", ":hover": { background: "#ff88ff" } }}
      startIcon={<Favorite />}
      onClick={clickHandler}
    >
      興味あり
    </Button>
  );
};
