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
import { Gender, Student } from "@/lib/graphql";

type Props = {
  student?: Student;
};

export const StudentDetail = ({ student }: Props) => {
  const gender =
    student?.gender === Gender.Male
      ? "男性"
      : student?.gender === Gender.Female
      ? "女性"
      : "その他";
  var nowStatus = student?.status ? "研究室探し中" : "研究室を探していない";

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
              <Typography fontWeight="light">性別</Typography>
              <Typography variant="h6">{gender}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">大学</Typography>
              <Typography variant="h6">{student?.university.name}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">学年</Typography>
              <Typography variant="h6">{student?.grade}年生</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">専攻分野</Typography>
              <Typography variant="h6">{student?.majors[0].name}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">ステータス</Typography>
              <Typography variant="h6">{nowStatus}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">GPA</Typography>
              <Typography variant="h6">
                {student?.gpa} /{student?.university.maxGpa}
              </Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">居住地</Typography>
              <Typography variant="h6">{student?.prefecture.name}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">生年月日</Typography>
              <Typography variant="h6">{student?.birthday}</Typography>
            </Stack>
            <Stack>
              <Typography fontWeight="light">メールアドレス</Typography>
              <Typography variant="h6">{student?.email}</Typography>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
