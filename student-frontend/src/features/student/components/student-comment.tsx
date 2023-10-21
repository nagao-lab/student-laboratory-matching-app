import {
  Box,
  Skeleton,
  Stack,
  Divider,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Student } from "@/lib/graphql";

const StudentCommentSkeleton = () => {
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

export const StudentComment = ({ student, loading }: Props) => {
  if (loading){
    return <StudentCommentSkeleton/>
  }
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
            {student?.comment}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
