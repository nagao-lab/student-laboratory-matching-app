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
import { Student } from "@/lib/graphql";

type Props = {
  student?: Student;
};

export const StudentImage = ({ student }: Props) => {
  const img = student?.imageUrl ? student?.imageUrl : "";
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
            {student?.name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
