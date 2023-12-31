import { Box } from "@mui/material";
import { NextPage } from "next";
import {
  MessageContent,
  MessageFooter,
} from "@/features/message-content";
import { MessageContentProvider } from "@/features/message-content/providers/message-content";
type Props = {
  params: { messageId: string };
};
const Page: NextPage<Props> = ({ params }: Props) => {
  return (
    <MessageContentProvider>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "calc(100vh - 64px - 56px)",
        }}
      >
        <Box style={{ overflowX: "hidden", overflowY: "auto" }}>
          <MessageContent
            messageRoomId={params.messageId}
          />
        </Box>
        <MessageFooter messageRoomID={params.messageId}/>
      </Box>
    </MessageContentProvider>
  );
};
export default Page;