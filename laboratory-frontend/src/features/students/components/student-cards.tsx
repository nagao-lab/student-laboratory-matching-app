"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Skeleton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { ChangeStatusToIconButton } from "../../../components/change-status-to-icon-button";
import { useStudents } from "../hooks/students";
// TODO 研究室一覧ページ : コンポーネントのPropsの型を定義する

export const StudentCardSkeleton = () => {
  const convenienceShowNumber = 10;  // 便宜的に表示する研究室カードの数
  return (
    <Box>
      {Array(convenienceShowNumber)
        .fill(0)
        .map((_, i) => (
          <Box
          sx = {{ minWidth: 275, m: 5 }}
          key={i}
          >
          <Skeleton variant="rounded" height={241}/>
          </Box>
        ))}
    </Box>
  );
}

type Props = {
  filterVal: string;
};

export const StudentCards = ({ filterVal }: Props) => {
  const router = useRouter();
  const { data, loading } = useStudents();

  if (loading) {
    return < StudentCardSkeleton />
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
