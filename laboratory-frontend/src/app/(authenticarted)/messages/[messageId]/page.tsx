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
    // maxHeight: `${globalThis.window?.innerHeight - (64 + 56)}`
    maxHeight: "calc(100vh - 64px - 56px)"
  }}>
    <div style={{overflow: "auto",}}>
      <MessageDetail messages={MockMessageContent}/>
    </div>
    
    <footer style={{
      display: "grid",
      gridTemplateRows: "1fr 20px",
      gridTemplateColumns: "20px 1fr 70px",
      position: "fixed",
      bottom: 0,
      zIndex: 1,
      width: "100%",
      backgroundColor: "white"
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
