import { Box, Card, CardContent, Typography } from "@mui/material";
import { Student } from "../mock/students";

// TODO 学生一覧ページ : コンポーネントのPropsの型を定義する

type Props = {
  students: Student[];
};

// TODO 学生一覧ページ : MuiのBoxを利用する
// TODO 学生一覧ページ : Boxの中で,map関数を利用してMuiのCardを挿入する
// TODO 学生一覧ページ : Cardの間にスペースを入れる

export const StudentCards = ({ students }: Props) => {
  return (
    <Box>
      {students.map((student, i) => (
        <Card key={i}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {student.name}
            </Typography>
            <Typography variant="body2" component="p">
              {student.comment}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
