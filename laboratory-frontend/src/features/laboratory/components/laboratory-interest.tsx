import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Student } from "@/lib/graphql";

type Props = {
  student?: Student;
};

export const StudentInterest = ({ student }: Props) => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Stack spacing={3.0}>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight="light" variant="h5">
                興味・関心のあること
              </Typography>
              <IconButton sx={{ right: "right" }}>
                <Edit sx={{ fontSize: 14 }} />
              </IconButton>
            </Stack>
            <Divider />
            {student?.interest}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
