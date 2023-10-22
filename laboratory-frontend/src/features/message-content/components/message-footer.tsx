"use client"

import { TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useMessageFooter } from "../hooks/message-footer";

type Props = {
  messageRoomID: string;
}

export const MessageFooter = ({messageRoomID}: Props) => {
  const { message, setMessage, onSubmit } = useMessageFooter()

    return (<footer style={{
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
          id="messageTextField"
          // label="Multiline"
          placeholder="メッセージを入力"
          value={message}
          multiline
          // maxRows={4}
          variant="standard"
          style={{
            // gridRow: 1,
            gridColumn: 2
          }}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button style={{
            // gridRow: 1,
            gridColumn: 3
          }}
          onClick={(e) => {
            const id = e.currentTarget.dataset.messageroomid
            if(id == undefined){
              return
            }
            onSubmit(id)
          }}
          data-messageroomid={messageRoomID}>
          <SendIcon />
        </Button>
      </footer>)
}