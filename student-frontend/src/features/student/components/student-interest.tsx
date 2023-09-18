// TODO 学生ページ : StudentInterestコンポーネントを作成する
// TODO 学生ページ : StudentInterestコンポーネント用のProps型を定義する
// TODO 学生ページ : StudentInterestではMuiのBoxを利用する
import { Box, Card, CardContent, Stack, Typography, IconButton } from "@mui/material";
import { Edit } from '@mui/icons-material';
import { Student } from "../mock/student"

type Props = {
    student: Student;
  };

  export const StudentInterest = ({ student }: Props) => {
    return (
        <Box>
            <Card>
                <CardContent>
                    <Stack spacing={3.0}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography fontWeight="light" variant="h5">興味・関心のあること</Typography>
                            <IconButton sx={{right: 'right'}}>
                                <Edit sx={{ fontSize: 14 }} />
                            </IconButton>
                        </Stack>
                        {student.interest}
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
  }