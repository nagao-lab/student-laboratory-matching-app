// TODO 研究室ページ : 

import { Box, Card, CardContent, Typography, Stack, IconButton } from "@mui/material";
import { Edit } from '@mui/icons-material';
import { Laboratory } from "../mock/laboratory"

type Props = {
    laboratory: Laboratory;
};

export const LaboratoryDetail = ({ laboratory }: Props) => {
    return (
        <Box>
            <Card>
                <CardContent>
                    <Stack spacing={3.0}>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography fontWeight="light" variant="h5">詳細</Typography>
                            <IconButton sx={{right: 'right'}}>
                                <Edit sx={{ fontSize: 14 }} />
                            </IconButton>
                        </Stack>
                        <Stack>
                            <Typography fontWeight="light">大学</Typography>
                            <Typography variant="h6">{laboratory.university.name}</Typography>
                        </Stack>
                        <Stack>
                            <Typography fontWeight="light">専攻分野</Typography>
                            <Typography variant="h6">{laboratory.major.name}</Typography>
                        </Stack>
                        <Stack>
                            <Typography fontWeight="light">教授</Typography>
                            <Typography variant="h6">{laboratory.professor}</Typography>
                        </Stack> 
                        <Stack>
                            <Typography fontWeight="light">メールアドレス</Typography>
                            <Typography variant="h6">{laboratory.email}</Typography>
                        </Stack>
                        <Stack>
                            <Typography fontWeight="light">所在地</Typography>
                            <Typography variant="h6">{laboratory.prefecture.name}</Typography>
                        </Stack>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
}