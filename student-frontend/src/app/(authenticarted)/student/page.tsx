import { StudentInterest } from "@/features/student/components/student-interest";
import { StudentComment } from "@/features/student/components/student-comment";
import { StudentDetail } from "@/features/student/components/student-detail";
import { StudentImage } from "@/features/student/components/student-image";
import { MockStudents } from "@/features/student";
import { Box, Stack } from "@mui/material";
import { NextPage } from "next";
import { StudentProvider } from "@/features/student/providers/student";

var num = 0;

const Page: NextPage = () => {
  return (
    <StudentProvider>
      <Box>
        <Stack direction="row" spacing={1.0}>
          <StudentImage student={MockStudents[num]} />
          <Stack sx={{ width: 1 }} spacing={1.0}>
            <StudentDetail student={MockStudents[num]} />
            <StudentComment student={MockStudents[num]} />
            <StudentInterest student={MockStudents[num]} />
          </Stack>
        </Stack>
      </Box>
    </StudentProvider>
  );
};

export default Page;
