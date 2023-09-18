// TODO メッセージ詳細ページ（mock） : MessageContentコンポーントをレンダリングする

import { Box, TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { NextPage } from "next";
import { MessageDetail } from "@/features/message-content/components/message-content";
import { MockMessageContent } from "@/features/message-content/mock/message-content";

const Page: NextPage = () => {
  return (
  <Box style={{
    display: "flex",
    flexDirection: "column",

  }}>
    <div /*style={{overflow: "scroll"}}*/>
      <MessageDetail messages={MockMessageContent}/>
    </div>
    
    <footer style={{
      display: "grid",
      // gridTemplateRows: "30px 1fr",
      gridTemplateColumns: "20px 1fr 70px",
      position: "fixed",
      bottom: 20,
      zIndex: 1,
      width: "100%",
      // backgroundColor: "green"
    }}>
      <TextField
        id="standard-multiline-flexible"
        // label="Multiline"
        placeholder="メッセージを入力"
        multiline
        // maxRows={4}
        variant="standard"
        style={{
          // gridRow: 1,
          gridColumn: 2
        }}
      />
      <Button style={{
          // gridRow: 1,
          gridColumn: 3
        }}>
        <SendIcon />
      </Button>
    </footer>
    
  </Box>
  );
};

export default Page;
