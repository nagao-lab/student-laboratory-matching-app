import {
  Box,
  Card,
  CardContent,
  Typography,
  Skeleton,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { MatchStatus, Laboratory } from "@/lib/graphql";

const LaboratoryDetailSkeleton = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Stack spacing={3.0}>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight="light" variant="h5">
                <Skeleton variant="text" sx={{ height: 24, width: 200 }} />
              </Typography>
            </Stack>
            <Divider />
            <Stack>
              <Typography fontWeight="light"><Skeleton variant="text" sx = {{height: 24, width: 100}}/></Typography>
              <Typography variant="h6">
                <Skeleton variant="text" sx={{ height: 32, width: 200 }} />
              </Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light"><Skeleton variant="text" sx = {{height: 24, width: 100}}/></Typography>
              <Typography variant="h6">
                <Skeleton variant="text" sx={{ height: 32, width: 200 }} />
              </Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light"><Skeleton variant="text" sx = {{height: 24, width: 100}}/></Typography>
              <Typography variant="h6">
                <Skeleton variant="text" sx={{ height: 32, width: 200 }} />
              </Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light"><Skeleton variant="text" sx = {{height: 24, width: 100}}/></Typography>
              <Typography variant="h6">
                <Skeleton variant="text" sx={{ height: 32, width: 200 }} />
              </Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light"><Skeleton variant="text" sx = {{height: 24, width: 100}}/></Typography>
              <Typography variant="h6">
                <Skeleton variant="text" sx={{ height: 32, width: 200 }} />
              </Typography>
            </Stack>

            <Stack>
              <Typography fontWeight="light"><Skeleton variant="text" sx = {{height: 24, width: 100}}/></Typography>
              <Typography variant="h6">
                <Skeleton variant="text" sx={{ height: 32, width: 200 }} />
              </Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light"><Skeleton variant="text" sx = {{height: 24, width: 100}}/></Typography>
              <Typography variant="h6">
                <Skeleton variant="text" sx={{ height: 32, width: 200 }} />
              </Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light"><Skeleton variant="text" sx = {{height: 24, width: 100}}/></Typography>
              <Typography variant="h6">
                <Skeleton variant="text" sx={{ height: 32, width: 200 }} />
              </Typography>
            </Stack>
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

export const LaboratoryDetail = ({ laboratory, loading }: Props) => {
  if (loading){
    return <LaboratoryDetailSkeleton/>
  }

  const nowStatus = 
  laboratory?.status === MatchStatus.Active 
    ? "学生探し中" 
    : "学生を探していない";

  return (
    <Box>
      <Card>
        <CardContent>
          <Stack spacing={3.0}>
            <Stack direction="row" justifyContent="space-between">
              <Typography fontWeight="light" variant="h5">
                詳細
              </Typography>
              <IconButton sx={{ right: "right" }}>
                <Edit sx={{ fontSize: 14 }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack>
              <Typography fontWeight="light">大学</Typography>
              <Typography variant="h6">{laboratory?.university.name}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">所在</Typography>
              <Typography variant="h6">{laboratory?.university.prefecture.name}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">専攻分野</Typography>
              <Typography variant="h6">{laboratory?.majors.map((major) => major.name+" ")}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">教授名</Typography>
              <Typography variant="h6">{laboratory?.professor}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">学生数</Typography>
              <Typography variant="h6">{laboratory?.numStudents}</Typography>
            </Stack>
            
            <Stack>
              <Typography fontWeight="light">ステータス</Typography>
              <Typography variant="h6">{nowStatus}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">研究室URL</Typography>
              <Typography variant="h6">
                {laboratory?.laboratoryUrl}
              </Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">メールアドレス</Typography>
              <Typography variant="h6">{laboratory?.email}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
