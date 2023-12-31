"use client";

import { StudentInterest } from "@/features/student/components/student-interest";
import { StudentComment } from "@/features/student/components/student-comment";
import { StudentDetail } from "@/features/student/components/student-detail";
import { StudentImage } from "@/features/student/components/student-image";
import { Box, Stack } from "@mui/material";
import { NextPage } from "next";
import { StudentProvider } from "@/features/student/providers/student";
import { useStudent } from "@/features/student/hooks/student";
import { Student } from "@/lib/graphql";

const Page: NextPage = () => {
  const { data, loading } = useStudent();
  const student = data?.student as Student;
  return (
    <StudentProvider>
      <Box>
        <Stack direction="row" spacing={1.0}>
          <StudentImage student={student} loading={loading}/>
          <Stack sx={{ width: 1 }} spacing={1.0}>
            <StudentDetail student={student} loading={loading}/>
            <StudentComment student={student} loading={loading}/>
            <StudentInterest student={student} loading={loading}/>
          </Stack>
        </Stack>
      </Box>
    </StudentProvider>
  );
};

export default Page;
