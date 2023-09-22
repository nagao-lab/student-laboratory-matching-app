// TODO 学生ページ : 

import { Box, Card, CardContent, Stack, Typography, IconButton } from "@mui/material";
import { Edit } from '@mui/icons-material';
import { Laboratory } from "../mock/laboratory"

type Props = {
    laboratory: Laboratory;
  };

  export const LaboratoryComment = ({ laboratory }: Props) => {
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
                        {laboratory.comment}
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    )
  }