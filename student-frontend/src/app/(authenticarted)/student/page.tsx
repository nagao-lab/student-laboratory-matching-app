// TODO 学生ページ : StudentInterestコンポーネントを利用する
// TODO 学生ページ : StudentInterestにmockデータを渡す
// TODO 学生ページ : StudentCommentコンポーネントを利用する
// TODO 学生ページ : StudentCommentにmockデータを渡す

import { StudentInterest } from "@/features/student/components/student-interest";
import { StudentComment } from "@/features/student/components/student-comment";
import { StudentCards } from "@/features/student/components/student";
import { MockStudents } from "@/features/student";
import { Box } from "@mui/material";
import { NextPage } from "next";

const Page: NextPage = () => {
  return <Box>
    <StudentCards student={MockStudents[0]}/>
    <StudentComment comment={'studentcomment'}/>
    <StudentInterest interest={'studentinterest'}/>
    
  </Box>
}

export default Page;
