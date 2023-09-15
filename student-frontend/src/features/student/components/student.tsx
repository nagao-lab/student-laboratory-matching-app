import { Box, Card, CardContent, Typography } from "@mui/material";
import { Student } from "../mock/student";

type Props = {
    student: Student;
  };

  export const StudentCards = ({ student }: Props) => {
    return (
        <Box>
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>名前</Typography>
                    <Typography>{student.name}</Typography>
                    <Typography variant="h6" gutterBottom>メールアドレス</Typography>
                    <Typography>{student.email}</Typography>
                    <Typography variant="h6" gutterBottom>学年</Typography>
                    <Typography>{student.grade}</Typography>
                    <Typography variant="h6" gutterBottom>GPA</Typography>
                    <Typography>{student.gpa}</Typography>
                    <Typography variant="h6" gutterBottom>性別</Typography>
                    <Typography>{student.gender}</Typography>
                    <Typography variant="h6" gutterBottom>生年月日</Typography>
                    <Typography>{student.birthday}</Typography>
                    <Typography>{student.image_url}</Typography>
                </CardContent>   
            </Card>  
        </Box>
    )
  }