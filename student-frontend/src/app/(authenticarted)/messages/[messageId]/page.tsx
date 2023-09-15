// TODO メッセージ詳細ページ（mock） : MessageContentコンポーントをレンダリングする
import { MessageCards, MockMessageContent } from "@/features/message-content";
import { Box } from "@mui/material";
import { NextPage } from "next";

const Page: NextPage = () => {
    return (<Box>
      <MessageCards messageContent = {MockMessageContent}/>
    </Box>
    )
  }

export default Page;