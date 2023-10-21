import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  IconButton,
  Skeleton
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { Laboratory } from "@/lib/graphql";

const LaboratoryImageSkeleton = () => {
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
  laboratory?: Laboratory;
  loading: boolean;
};

export const LaboratoryImage = ({ laboratory , loading }: Props) => {
  const img = laboratory?.imageUrl ? laboratory?.imageUrl : "";

  if (loading){
    return <LaboratoryImageSkeleton/>
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
            {laboratory?.name}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
