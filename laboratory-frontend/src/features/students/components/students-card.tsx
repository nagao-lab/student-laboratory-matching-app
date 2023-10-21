"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeStatusToIconButton } from "../../../components/change-status-to-icon-button";
import { useLaboratories } from "../hooks/stidents";
// TODO 研究室一覧ページ : コンポーネントのPropsの型を定義する

type Props = {
  filterVal: string;
};

export const LaboratoryCards = ({ filterVal }: Props) => {
  const router = useRouter();
  const { data, loading, error } = useLaboratories();

  if (loading) {
    return <Box>loading...</Box>;
  }

  if (error) {
    return <Box>404</Box>;
  }

  return (
    <Box>
      {data?.getMatchableLaboratories
        ?.filter((laboratory) => {
          let isMatch =
            laboratory.name.indexOf(filterVal) !== -1 ||
            laboratory.university.name.indexOf(filterVal) !== -1;
          isMatch =
            isMatch ||
            laboratory.majors.some(
              (major) => major.name.indexOf(filterVal) !== -1
            );
          return isMatch;
        })
        // .filter((laboratory) => {
        //   const isDisp =
        //     toggle === false ||
        //     laboratory.status === "LIKE_FROM_STUDENT" ||
        //     laboratory.status === "LIKE_FROM_BOTH";
        //   return isDisp;
        // })
        .map((laboratory, i) => (
          <Card key={i} sx={{ minWidth: 275, m: 5 }}>
            <CardContent>
              <Typography sx={{ mb: 0.75 }} variant="h4" component="div">
                {laboratory.university.name}
              </Typography>
              <Typography sx={{ mb: 0.75 }} variant="h5" component="div">
                {laboratory.name}
              </Typography>
              <Typography sx={{ mb: 0.75 }} color="text.secondary">
                {laboratory.majors.map((item) => item.name + " ")}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  console.log(laboratory.status);
                  router.push(`/laboratories/${laboratory.id}`);
                }}
              >
                詳細を見る
              </Button>
            </CardActions>
            <CardContent>
              <ChangeStatusToIconButton laboratoryId={laboratory.id} />
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};
