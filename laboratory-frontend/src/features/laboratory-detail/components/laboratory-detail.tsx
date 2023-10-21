"use client";

import { Avatar, Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Chat, Groups, Link, Person, Place, School } from "@mui/icons-material";
// import { ChangeStatusToIconButton } from "../../../components/change-status-to-icon-button";
import { useStudentDetail } from "../hooks/student-detail";

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
          <Typography variant="h6" ><Place sx={{ color: 'success.main' }} /> 所在</Typography>
          <Typography variant="subtitle1">{data?.student.university.prefecture.name}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4 }}><School sx={{ color: 'success.main' }} /> 専攻</Typography>
          <Typography variant="subtitle1"><Stack>{data?.student.majors.map((major) => major.name+" ")}</Stack></Typography>
          <Typography variant="h6" sx={{ marginTop: 4, }}><Person sx={{ color: 'success.main' }} /> 教授</Typography>
          <Typography variant="subtitle1">{data?.student.professor}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4  }}><Groups sx={{ color: 'success.main' }} /> 学生数</Typography>
          <Typography variant="subtitle1">{data?.student.numLaboratories}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4 }}><Chat sx={{ color: 'success.main' }} /> コメント</Typography>
          <Typography variant="subtitle1">{data?.student.comment}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4 }}><Link sx={{ color: 'success.main' }} /> 研究室URL</Typography>
          <Typography variant="subtitle1">{data?.student.studentUrl}</Typography>
        </Card>
        
      </Box>

      {/*<ChangeStatusToIconButton status={data?.student.status} />*/}
    </>
  );
};
