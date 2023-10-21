import {
  Box,
  Stack,
  Divider,
  Card,
  CardContent,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Laboratory } from "@/lib/graphql";

const LaboratoryCommentSkeleton = () => {
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
  laboratory?: Laboratory;
  loading: boolean;
};

export const LaboratoryComment = ({ laboratory, loading }: Props) => {
  if (loading){
    return <LaboratoryCommentSkeleton/>
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
            {laboratory?.comment}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
