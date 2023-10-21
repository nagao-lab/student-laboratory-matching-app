import {
  StudentDetail,
} from "@/features/student-detail";
import { StudentDetailProvider } from "@/features/student-detail/providers/student-detail";
import { Stack } from "@mui/material";
import { NextPage } from "next";

type Props = {
  params: { studentId: string };
};

const Page: NextPage<Props> = ({ params }: Props) => {
  return (
    <StudentDetailProvider>
      <Stack>
        <StudentDetail
          studentId={params.studentId}
        />
      </Stack>
    </StudentDetailProvider>
  );
};

export default Page;
