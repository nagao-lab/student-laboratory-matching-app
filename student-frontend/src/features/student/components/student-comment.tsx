import {
  Box,
  Stack,
  Divider,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Student } from "../mock/student";

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
              <Typography fontWeight="light" variant="h5">
                コメント
              </Typography>
              <IconButton sx={{ right: "right" }}>
                <Edit sx={{ fontSize: 14 }} />
              </IconButton>
            </Stack>
            <Divider />
            {student.comment}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
