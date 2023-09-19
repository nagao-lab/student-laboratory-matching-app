// TODO 学生ページ :

import { Box, Card, CardContent, Stack, Typography, IconButton } from "@mui/material";
import { Edit } from '@mui/icons-material';
import { Student } from "../mock/student";
import Image from 'next/image'

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
                    <Image src="/yaruki_moeru_man.png"
                    width={150}
                    height={150} 
                    alt="Picture of the author"
                    />
                    <Typography align="center" fontSize={25}>{student.name}</Typography>
                </CardContent>   
            </Card>  
        </Box>
    )
  }