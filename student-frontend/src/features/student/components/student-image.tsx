// TODO 学生ページ :

import { Box, Card, CardContent, Stack, Typography, IconButton, Avatar} from "@mui/material";
import { Edit } from '@mui/icons-material';
import { Student } from "../mock/student";

type Props = {
    student: Student;
  };

  export const StudentImage = ({ student }: Props) => {
    return (
        
        <Box>
            <Card>
                <CardContent>
                    <Stack direction="row" justifyContent="space-between">
                        <Typography></Typography>
                        <IconButton sx={{right: 'right'}}>
                            <Edit sx={{ fontSize: 14 }} />
                        </IconButton>
                    </Stack>
                    <Avatar src="image.jpg"
                    sx={{ width: 150, height: 150 }}
                    />
                    <Typography align="center" fontSize={25}>{student.name}</Typography>
                </CardContent>   
            </Card>  
        </Box>
    )
  }