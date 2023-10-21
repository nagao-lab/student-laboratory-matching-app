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
import { useStudents } from "../hooks/stidents";
// TODO 研究室一覧ページ : コンポーネントのPropsの型を定義する

type Props = {
  filterVal: string;
};

export const StudentCards = ({ filterVal }: Props) => {
  const router = useRouter();
  const { data, loading, error } = useStudents();

  if (loading) {
    return <Box>loading...</Box>;
  }

  if (error) {
    return <Box>404</Box>;
  }

  return (
    <Box>
      {data?.getMatchableStudents
        ?.filter((student) => {
          let isMatch =
            student.name.indexOf(filterVal) !== -1 ||
            student.university.name.indexOf(filterVal) !== -1;
          isMatch =
            isMatch ||
            student.majors.some(
              (major) => major.name.indexOf(filterVal) !== -1
            );
          return isMatch;
        })
        // .filter((student) => {
        //   const isDisp =
        //     toggle === false ||
        //     student.status === "LIKE_FROM_STUDENT" ||
        //     student.status === "LIKE_FROM_BOTH";
        //   return isDisp;
        // })
        .map((student, i) => (
          <Card key={i} sx={{ minWidth: 275, m: 5 }}>
            <CardContent>
              <Typography sx={{ mb: 0.75 }} variant="h4" component="div">
                {student.university.name}
              </Typography>
              <Typography sx={{ mb: 0.75 }} variant="h5" component="div">
                {student.name}
              </Typography>
              <Typography sx={{ mb: 0.75 }} color="text.secondary">
                {student.majors.map((item) => item.name + " ")}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  console.log(student.status);
                  router.push(`/students/${student.id}`);
                }}
              >
                詳細を見る
              </Button>
            </CardActions>
            <CardContent>
              <ChangeStatusToIconButton studentId={student.id} />
            </CardContent>
          </Card>
        ))}
    </Box>
  );
};
