import { Box, Card, CardContent, Stack, Typography, IconButton, Avatar} from "@mui/material";
import { Edit } from '@mui/icons-material';
import { Laboratory } from "../mock/laboratory";

type Props = {
    laboratory: Laboratory;
};

export const LaboratoryImage = ({ laboratory }: Props) => {
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
                    <Typography align="center" fontSize={25}>{laboratory.name}</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}