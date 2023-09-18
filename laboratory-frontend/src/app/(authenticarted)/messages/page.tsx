// TODO メッセージ一覧ページ : CommentCardsを使ってメッセージ一覧を表示する

import { MessageCards, MockMessages } from "@/features/messages";
import { Stack } from "@mui/material";
import { NextPage } from "next";


const Page: NextPage = () => {
  return (
    <Stack>
      <MessageCards messages={MockMessages} />
    </Stack>
  )
};

export default Page;