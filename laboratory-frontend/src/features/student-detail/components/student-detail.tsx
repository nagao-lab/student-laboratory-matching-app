"use client";

import { Avatar, Box, Card, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { Chat, Dehaze, Equalizer, Person, Place, School, Visibility} from "@mui/icons-material";
// import { ChangeStatusToIconButton } from "../../../components/change-status-to-icon-button";
import { useStudentDetail } from "../hooks/student-detail";
import { Gender } from "@/lib/graphql";

const StudentDetailSkeleton = () => {
  return(
    <Box sx={{ m: 2 }}>
      <Card sx={{margin: 2, px: 2, py: 6}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <Skeleton variant="circular" sx={{ width: 120, height: 120 }}/>
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography sx={{ marginTop: 1 }}>
              <Skeleton variant="text" sx={{ width: 400, height: 56 }}/>
              <Skeleton variant="text" sx={{ width: 200, height: 32 }}/>
            </Typography>
          </Grid>
        </Grid>
      </Card>

      <Card sx={{margin: 2, px: 4, py: 4}}>
        <Typography variant="h6" ><Skeleton variant="text" sx={{ width: 200, height: 33 }}/></Typography>
        <Typography variant="subtitle1"><Skeleton variant="text" sx={{ width: 400, height: 28  }}/></Typography>
        <Typography variant="h6" sx={{ marginTop: 4 }}><Skeleton variant="text" sx={{ width: 200, height: 33 }}/></Typography>
        <Typography variant="subtitle1"><Skeleton variant="text" sx={{ width: 400, height: 28 }}/></Typography>
        <Typography variant="h6" sx={{ marginTop: 4, }}><Skeleton variant="text" sx={{ width: 200, height: 33 }}/></Typography>
        <Typography variant="subtitle1"><Skeleton variant="text" sx={{ width: 400, height: 28 }}/></Typography>
        <Typography variant="h6" sx={{ marginTop: 4  }}><Skeleton variant="text" sx={{ width: 200, height: 33 }}/></Typography>
        <Typography variant="subtitle1"><Skeleton variant="text" sx={{ width: 400, height: 28 }}/></Typography>
        <Typography variant="h6" sx={{ marginTop: 4 }}><Skeleton variant="text" sx={{ width: 200, height: 33 }}/></Typography>
        <Typography variant="subtitle1"><Skeleton variant="text" sx={{ width: 400, height: 28 }}/></Typography>
        <Typography variant="h6" sx={{ marginTop: 4 }}><Skeleton variant="text" sx={{ width: 200, height: 33 }}/></Typography>
        <Typography variant="subtitle1"><Skeleton variant="text" sx={{ width: 400, height: 28 }}/></Typography>
        <Typography variant="h6" sx={{ marginTop: 4 }}><Skeleton variant="text" sx={{ width: 200, height: 33 }}/></Typography>
        <Typography variant="subtitle1"><Skeleton variant="text" sx={{ width: 400, height: 28 }}/></Typography>
      </Card>

  </Box>
  )
}

type Props = {
  studentId: string;
};

export const StudentDetail = ({ studentId }: Props) => {
  const { data, loading } = useStudentDetail({
    studentId: studentId,
  });

  if (loading) {
    return <StudentDetailSkeleton />;
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
          <Typography variant="h6" sx={{ marginTop: 4 }}><Dehaze sx={{ color: 'success.main' }} /> 学年</Typography>
          <Typography variant="subtitle1">{data?.student.grade}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4 }}><School sx={{ color: 'success.main' }} /> 専攻</Typography>
          <Typography variant="subtitle1"><Stack>{data?.student.majors.map((major) => major.name+" ")}</Stack></Typography>
          <Typography variant="h6" sx={{ marginTop: 4, }}><Equalizer sx={{ color: 'success.main' }} /> GPA</Typography>
          <Typography variant="subtitle1"> {data?.student.gpa} / {data?.student.university.maxGpa}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4 }}><Place sx={{ color: 'success.main' }} /> 居住地</Typography>
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
