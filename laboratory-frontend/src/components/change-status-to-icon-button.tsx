"use client";

import { Button } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useFavoriteLaboratory } from "@/features/laboratories/hooks/laboratories";

type Props = {
  laboratoryId: string;
};

export const ChangeStatusToIconButton = ({ laboratoryId }: Props) => {
  const { clickHandler } = useFavoriteLaboratory(laboratoryId);

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
