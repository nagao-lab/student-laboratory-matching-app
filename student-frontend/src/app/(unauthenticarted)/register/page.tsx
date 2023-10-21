import { Box } from "@mui/material";
import { NextPage } from "next";
import { StudentRegisterForm } from "@/features/register";
import { RegisterProvider } from "@/features/register/providers/register";

const Page: NextPage = () => {
  return (
    <RegisterProvider>
      <Box>
        <StudentRegisterForm />
      </Box>
    </RegisterProvider>
  );
};

export default Page;
