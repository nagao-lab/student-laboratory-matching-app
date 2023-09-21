"use client";

import { Box, Stack, Typography } from "@mui/material";
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

  return (
    <>
      <Box sx={{ m: 5 }}>
        <Typography variant="h3">
          {data?.laboratory.name} @{data?.laboratory.university.name}
        </Typography>
        <Typography variant="h6">所在</Typography>
        {data?.laboratory.university.prefecture.name}
        <Typography variant="h6">専攻</Typography>
        <Stack>{data?.laboratory.majors.map((major) => major.name)}</Stack>
        <Typography variant="h6">教授</Typography>
        {data?.laboratory.professor}
        <Typography variant="h6">学生数</Typography>
        {data?.laboratory.numStudents}
        <Typography variant="h6">コメント</Typography>
        {data?.laboratory.comment}
      </Box>

      <ChangeStatusToIconButton status={data?.laboratory.status} laboratoryID={data?.laboratory.id} />
    </>
  );
};
