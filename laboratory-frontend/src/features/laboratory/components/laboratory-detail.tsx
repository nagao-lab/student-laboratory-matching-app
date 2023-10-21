import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import { Edit } from "@mui/icons-material";
import { MatchStatus, Laboratory } from "@/lib/graphql";

type Props = {
  laboratory?: Laboratory;
};

export const LaboratoryDetail = ({ laboratory }: Props) => {
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
