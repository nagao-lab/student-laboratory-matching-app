// TODO 学生ページ : StudentCommentコンポーネントを作成する
// TODO 学生ページ : StudentCommentコンポーネント用のPropsの型を定義する
// TODO 学生ページ : StudentCommentではMuiのBoxを利用する
import { Box, Card, CardContent, Stack, Typography, IconButton, Divider } from "@mui/material";
import { Edit } from '@mui/icons-material';
import { Student } from "../mock/student"

type Props = {
    student: Student;
  };

  export const StudentComment = ({ student }: Props) => {
    return (
        <Box>
            <Card>
                <CardContent>
                    <Stack spacing={3.0}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography fontWeight="light" variant="h5">コメント</Typography>
                            <IconButton sx={{right: 'right'}}>
                                <Edit sx={{ fontSize: 14 }} />
                            </IconButton>
                        </Stack>
                        <Divider />
                        {student.comment}
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
  }