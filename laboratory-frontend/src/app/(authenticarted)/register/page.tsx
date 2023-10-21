// TODO 学生の初期フォーム

import { Box } from "@mui/material";
import { NextPage } from "next";
import { LaboratoryRegisterForm } from "@/features/register";
import { RegisterProvider } from "@/features/register/providers/register";

const Page: NextPage = () => {
  return (
    <RegisterProvider>
      <Box>
        <LaboratoryRegisterForm />
      </Box>
    </RegisterProvider>
  );
};

export default Page;
