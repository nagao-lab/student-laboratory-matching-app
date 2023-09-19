import { TextField, Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export const MessageFooter = () => {
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
      </footer>)
}