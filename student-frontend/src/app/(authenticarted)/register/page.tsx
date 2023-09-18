// TODO 学生の初期フォーム

import { Box } from "@mui/material";
import { NextPage } from "next";
import { StudentRegisterForm } from "@/features/register";

const Page: NextPage = () => {
  return (
    <Box>
      <StudentRegisterForm />
    </Box>
  );
};

export default Page;
