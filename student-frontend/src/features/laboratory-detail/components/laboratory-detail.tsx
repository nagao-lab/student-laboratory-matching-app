"use client";

import { Avatar, Box, Card, Grid, Stack, Typography } from "@mui/material";
import { Chat, Groups, Link, Person, Place, School } from "@mui/icons-material";
import { ChangeStatusToIconButton } from "../../../components/change-status-to-icon-button";
import { useLaboratoryDetail } from "../hooks/laboratory-detail";

type Props = {
  laboratoryId: string;
};

export const LaboratoryDetail = ({ laboratoryId }: Props) => {
  const { data, loading, error } = useLaboratoryDetail({
    laboratoryId: laboratoryId,
  });

  if (loading) {
    return <Box>loading...</Box>;
  }

  if (error) {
    return <Box>404</Box>;
  }

  console.log(data?.laboratory)

  return (
    <>
      <Box sx={{ m: 2 }}>
        <Card sx={{margin: 2, px: 2, py: 6}}>
          {/* at leftmost: show image from data?.laboratory.imageUrl*/}
          {/* right side of image: show name, university */}
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <Avatar
                alt={data?.laboratory.name}
                src={data?.laboratory.imageUrl}
                sx={{ width: 120, height: 120 }}
              />  
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography sx={{ marginTop: 1 }} variant="h3" component="div">
                {data?.laboratory.name}
              </Typography>
              <Typography sx={{ marginTop: 1 }} variant="h5" component="div">
                {data?.laboratory.university.name}
              </Typography>
            </Grid>
          </Grid>
        </Card>

          

        <Card sx={{margin: 2, px: 4, py: 4}}>
          <Typography variant="h6" ><Place sx={{ color: 'success.main' }} /> 所在</Typography>
          <Typography variant="subtitle1">{data?.laboratory.university.prefecture.name}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4 }}><School sx={{ color: 'success.main' }} /> 専攻</Typography>
          <Typography variant="subtitle1"><Stack>{data?.laboratory.majors.map((major) => major.name)}</Stack></Typography>
          <Typography variant="h6" sx={{ marginTop: 4, }}><Person sx={{ color: 'success.main' }} /> 教授</Typography>
          <Typography variant="subtitle1">{data?.laboratory.professor}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4  }}><Groups sx={{ color: 'success.main' }} /> 学生数</Typography>
          <Typography variant="subtitle1">{data?.laboratory.numStudents}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4 }}><Chat sx={{ color: 'success.main' }} /> コメント</Typography>
          <Typography variant="subtitle1">{data?.laboratory.comment}</Typography>
          <Typography variant="h6" sx={{ marginTop: 4 }}><Link sx={{ color: 'success.main' }} /> 研究室URL</Typography>
          <Typography variant="subtitle1">{data?.laboratory.laboratoryUrl}</Typography>
        </Card>
        
      </Box>

      <ChangeStatusToIconButton status={data?.laboratory.status} />
    </>
  );
};
