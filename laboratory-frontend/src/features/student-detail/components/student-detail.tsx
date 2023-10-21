"use client";

import { Avatar, Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Chat, Dehaze, Equalizer, Person, Place, School, Visibility} from "@mui/icons-material";
// import { ChangeStatusToIconButton } from "../../../components/change-status-to-icon-button";
import { useStudentDetail } from "../hooks/student-detail";
import { Gender } from "@/lib/graphql";

type Props = {
  studentId: string;
};

export const StudentDetail = ({ studentId }: Props) => {
  const { data, loading, error } = useStudentDetail({
    studentId: studentId,
  });

  if (loading) {
    return <Box>loading...</Box>;
  }

  if (error) {
    return <Box>404</Box>;
  }

  const gender =
    data?.student.gender === Gender.Male
      ? "男性"
      : data?.student.gender === Gender.Female
      ? "女性"
      : "その他";


  return (
    <>
      <Box sx={{ m: 2 }}>
        <Card sx={{margin: 2, px: 2, py: 6}}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Avatar
                alt={data?.student.name}
                src={data?.student.imageUrl}
                sx={{ width: 120, height: 120 }}
              />  
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography sx={{ marginTop: 1, marginLeft: -15 }} variant="h3" component="div">
                {data?.student.name}
              </Typography>
              <Typography sx={{ marginTop: 1, marginLeft: -15 }} variant="h5" component="div">
                {data?.student.university.name}
              </Typography>
            </Grid>
          </Grid>
        </Card>

        <Card sx={{margin: 2, px: 4, py: 4}}>
          <Typography variant="h6" ><Person sx={{ color: 'success.main' }} /> 性別</Typography>
          <Typography variant="subtitle1">{gender}</Typography>
          <Typography variant="h6" ><Dehaze sx={{ color: 'success.main' }} /> 学年</Typography>
          <Typography variant="subtitle1">{data?.student.grade}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4 }}><School sx={{ color: 'success.main' }} /> 専攻</Typography>
          <Typography variant="subtitle1"><Stack>{data?.student.majors.map((major) => major.name+" ")}</Stack></Typography>
          <Typography variant="h6" sx={{ marginTop: 4, }}><Equalizer sx={{ color: 'success.main' }} /> GPA</Typography>
          <Typography variant="subtitle1"> {data?.student.gpa} / {data?.student.university.maxGpa}</Typography>
          <Typography variant="h6" ><Place sx={{ color: 'success.main' }} /> 居住地</Typography>
          <Typography variant="subtitle1">{data?.student.prefecture.name}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4 }}><Chat sx={{ color: 'success.main' }} /> コメント</Typography>
          <Typography variant="subtitle1">{data?.student.comment}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4 }}><Visibility sx={{ color: 'success.main' }} /> 興味・関心</Typography>
          <Typography variant="subtitle1">{data?.student.interest}</Typography>
        </Card>
        
      </Box>

      {/*<ChangeStatusToIconButton status={data?.student.status} />*/}
    </>
  );
};
