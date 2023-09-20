"use client";

import {
  Avatar, 
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid, 
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeStatusToIconButton } from "../../../components/change-status-to-icon-button";
import { Laboratory } from "../mock/laboratories";

// TODO 研究室一覧ページ : コンポーネントのPropsの型を定義する

type Props = {
  laboratories: Laboratory[];
  filterVal: string;
  toggle: boolean;
};

export const LaboratoryCards = ({ laboratories, filterVal, toggle }: Props) => {
  const router = useRouter();
  return (
    <Box>
      {laboratories
        .filter((laboratory) => {
          let isMatch =
            laboratory.name.indexOf(filterVal) !== -1 ||
            laboratory.university.name.indexOf(filterVal) !== -1;
          isMatch =
            isMatch ||
            laboratory.major.some(
              (major) => major.name.indexOf(filterVal) !== -1
            );
          return isMatch;
        })
        .filter((laboratory) => {
          const isDisp =
            toggle === false ||
            laboratory.studentLaboratory.status === "LIKE_FROM_STUDENT" ||
            laboratory.studentLaboratory.status === "LIKE_FROM_BOTH";
          return isDisp;
        })
        .map((laboratory, i) => (
          <Card key={i} sx={{ minWidth: 275, m: 5 }} >
            <CardContent>
              <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <Avatar
                  alt={laboratory.name}
                  src={laboratory.imageUrl}
                  sx={{ width: 120, height: 120 }}
                />  
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography sx={{ marginTop: 1 }} variant="h3" component="div">
                  {laboratory.university.name}
                </Typography>
                <Typography sx={{ marginTop: 1 }} variant="h5" component="div">
                  {laboratory.name}
                </Typography>
                <Typography sx={{ marginTop: 1 }} color="text.secondary">
                {laboratory.major.map((item) => item.name + " ")}
              </Typography>
              </Grid>
            </Grid>
              
            </CardContent>
            <CardActions>
              <Button
                sx={{ marginLeft: 1 }}
                size="medium"
                onClick={() => {
                  console.log(laboratory.studentLaboratory.status);
                  router.push(`/laboratories/${laboratory.ID}`);
                }}
              >
                詳細を見る
              </Button>
            </CardActions>
            <CardContent>
              <ChangeStatusToIconButton
                status={laboratory.studentLaboratory.status}
              />
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};
