import {
  Box,
  Card,
  CardContent,
  Skeleton,
  Stack,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Student } from "@/lib/graphql";

const StudentImageSkeleton = () => {
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
          <Skeleton variant="circular" sx={{ width: 120, height: 120 }} />
          <Typography align="center" fontSize={25}>
            <Skeleton variant="text" sx={{ height: 56 }} />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

type Props = {
  student?: Student;
  loading: boolean;
};

export const StudentImage = ({ student, loading }: Props) => {
  const img = student?.imageUrl ? student?.imageUrl : "";

  if (loading){
    return <StudentImageSkeleton/>
  }

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
