import { MessageCards } from "@/features/messages";
import { MessagesProvider } from "@/features/messages/providers/messages";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <MessagesProvider>
      <Stack>
        <MessageCards />
      </Stack>
    </MessagesProvider>
  );
};

export default Page;
