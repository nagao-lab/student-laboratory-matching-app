"use client";

import { Button } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { useFavoriteLaboratoryMutation } from "@/lib/graphql";

type Props = {
  status: string | undefined;
  laboratoryID: string | undefined;
};

export const ChangeStatusToIconButton = ({ status, laboratoryID }: Props) => {
  const [ favoriteLaboratoryMutation ] = useFavoriteLaboratoryMutation()

  return status === "" || status === "LIKE_FROM_STUDENT" ? (
    <Button
      variant="contained"
      sx={{ backgroundColor: "#ff00ff", ":hover": { background: "#ff88ff" } }}
      startIcon={<Favorite />}
      onClick={() => {
        if(laboratoryID == undefined){
          window.alert("Error")
          return;
        }

        favoriteLaboratoryMutation({ // TODO: cookieからuserID取得
          variables: {
            input: {
              studentId: "1",
              laboratoryId: laboratoryID
            }
          }
        })

        console.log(status)
      }}
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
      onClick={() => {
        if(laboratoryID == undefined){
          window.alert("Error")
          return;
        }

        favoriteLaboratoryMutation({ // TODO: cookieからuserID取得
          variables: {
            input: {
              studentId: "1",
              laboratoryId: laboratoryID
            }
          }
        })

        console.log(status)
      }}
    >
      興味あり
    </Button>
  );
};
