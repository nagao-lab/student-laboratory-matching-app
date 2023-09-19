
'use client';

import { Box } from "@mui/material";
import { ChangeStatusToIconButton } from "../../../components/change-status-to-icon-button";
import { Laboratory } from "../mock/laboratory-detail";

type Props = {
    laboratories: Laboratory[];
    laboratoryId: string;
  };

// 研究室詳細ページ（mock）
export const LaboratoryDetail = ({ laboratories, laboratoryId }: Props) => {
  
  console.log(laboratoryId);

  const laboratory = laboratories.filter(
    (laboratory) => {
      return laboratory.ID === +laboratoryId
    }
  )[0];

  return( 
    <>

    <Box sx={{m: 5}}>
      <h1>{laboratory.name} @{laboratory.university.name}</h1>
      <h3>所在</h3>
      {laboratory.prefecture.name}
      <h3>専攻</h3>
      {laboratory.major.name}
      <h3>教授</h3>
      {laboratory.professor}
      <h3>学生数</h3>
      {laboratory.num_students}
      <h3>コメント</h3>
      {laboratory.comment}
    </Box>
    
    <ChangeStatusToIconButton status={laboratory.studentLaboratory.status}/>
    
    </>
  );
  
}