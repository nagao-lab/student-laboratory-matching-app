import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Laboratory } from "@/lib/graphql";

type Props = {
  laboratory?: Laboratory;
};

export const LaboratoryImage = ({ laboratory }: Props) => {
  const img = laboratory?.imageUrl ? laboratory?.imageUrl : "";
  return (
    <Box>
      <Card>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Typography></Typography>
            <IconButton sx={{ right: "right" }}>
              <Edit sx={{ fontSize: 14 }} />
            </IconButton>
          </Stack>
          <Avatar src={img} sx={{ width: 120, height: 120 }} />
          <Typography align="center" fontSize={25}>
            {laboratory?.name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
