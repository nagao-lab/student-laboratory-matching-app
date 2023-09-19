import { MessageCards, MockMessages } from "@/features/messages";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <Stack>
      <MessageCards messages={MockMessages} />
    </Stack>
  );
};

export default Page;
