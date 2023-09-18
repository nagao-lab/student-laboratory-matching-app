// 学生詳細ページ（mock）

import { StudentDetail, MockStudents } from "@/features/student-detail";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <Stack>
      <StudentDetail students={MockStudents}/>
    </Stack>
  )
};

export default Page;