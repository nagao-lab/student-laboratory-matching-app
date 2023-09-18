// 学生詳細ページ（mock）
'use client';

import { Box } from "@mui/material";
import { useParams } from "next/navigation"
import { ChangeStatusToIconButton } from "../../../components/change-status-to-icon-button";
import { Student } from "../mock/student-detail";

type Props = {
    students: Student[];
  };

// 研究室詳細ページ（mock）
export const StudentDetail = ({ students }: Props) => {
  
  const param = useParams()
  const student = students.filter(
    (student) => {
      return student.ID === +param.studentId
    }
  )[0];

  return( 
    <>

    <Box sx={{m: 5}}>
      <h1>{student.name} @{student.university.name}</h1>
      <h3>専攻</h3>
      {student.major.name}
      <h3>学年</h3>
      {student.grade <= 4 ? `B${student.grade}`: `M${student.grade - 4}`}
      <h3>GPA</h3>
      {student.gpa}
      <h3>やりたいこと</h3>
      {student.interest}
      <h3>コメント</h3>
      {student.comment}
    </Box>
    
    <ChangeStatusToIconButton status={student.studentLaboratory.status}/>
    
    </>
  );
  
}