"use client";

import { Button } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useFavoriteLaboratory } from "@/features/laboratories/hooks/laboratories";

type Props = {
  laboratoryId: string;
};

export const ChangeStatusToIconButton = ({ laboratoryId }: Props) => {
  const {state, clickHandler} = useFavoriteLaboratory(laboratoryId);

  return state === "" || state === "LIKE_FROM_LABORATORY" ? (
    <Button
      variant="contained"
      sx={{ backgroundColor: "#ff00ff", ":hover": { background: "#ff88ff" } }}
      startIcon={<Favorite />}
      onClick={clickHandler}
    >
      興味あり
    </Button>
  ) : (
    <Button
      variant="contained"
      sx={{
        color: "#888888",
        backgroundColor: "#cccccc",
        ":hover": { background: "#aaaaaa" },
      }}
      startIcon={<Favorite />}
      onClick={clickHandler}
    >
      興味あり
    </Button>
  );
};
