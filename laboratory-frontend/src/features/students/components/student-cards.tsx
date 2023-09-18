
'use client';

import { Box, Button, Card, CardContent, CardActions, Typography } from "@mui/material";
import { useRouter } from "next/navigation"
import { ChangeStatusToIconButton } from "../../../components/change-status-to-icon-button";
import { Student } from "../mock/students";

// TODO 学生一覧ページ : コンポーネントのPropsの型を定義する

type Props = {
  students: Student[];
  filterVal: string;
  toggle: boolean;
};

// TODO 学生一覧ページ : MuiのBoxを利用する
// TODO 学生一覧ページ : Boxの中で,map関数を利用してMuiのCardを挿入する
// TODO 学生一覧ページ : Cardの間にスペースを入れる

export const StudentCards = ({ students, filterVal, toggle }: Props) => {
  const router = useRouter()
  return (
    <Box>
      {students
      .filter((student) => {
        const isMatch = student.name.indexOf(filterVal) !== -1 || student.university.name.indexOf(filterVal) !== -1 || student.major.name.indexOf(filterVal) !== -1;
        return isMatch
      })
      .filter((student) => {
        const isDisp = toggle === false || student.studentLaboratory.status === "LIKE_FROM_STUDENT" || student.studentLaboratory.status === "LIKE_FROM_BOTH";
        return isDisp
      })
      .map((student, i) => (
        <Card key={i} sx={{ minWidth: 275, m: 5}}>
          <CardContent>
            <Typography variant="h5" component="div">
            {student.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {student.university.name} {student.major.name}
           </Typography>
           
          </CardContent>
          <CardActions>
            <Button size="small"
            onClick={()=>{
              console.log(student.studentLaboratory.status)
              router.push(`/students/${student.ID}`)
            }}
            >
              詳細を見る
            </Button>
          </CardActions>
          <CardContent>
            <ChangeStatusToIconButton status={student.studentLaboratory.status}/>
          </CardContent>

          
        </Card>
      ))}
    </Box>
  );
};
