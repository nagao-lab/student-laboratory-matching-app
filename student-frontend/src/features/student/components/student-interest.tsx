import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Stack,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Student } from "@/lib/graphql";

const StudentInterestSkeleton = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Stack spacing={3.0}>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight="light" variant="h5">
                <Skeleton variant="text" sx={{ height: 32, width: 200 }} />
              </Typography>
            </Stack>
            <Divider />
              
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}

type Props = {
  student?: Student;
  loading: boolean;
};

export const StudentInterest = ({ student, loading }: Props) => {
  if (loading){
    return <StudentInterestSkeleton/>
  }
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
