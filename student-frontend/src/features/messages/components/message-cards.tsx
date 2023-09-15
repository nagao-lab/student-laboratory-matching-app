// TODO メッセージ一覧ページ : MessageCardsコンポーネントを作成



import { Box, Button, Card, CardContent, CardActions, Typography } from "@mui/material";
import { Message } from "../mock/messages";

// TODO メッセージ一覧ページ : MessageCardsコンポーネント用のPropsを定義

type Props = {
  messages: Message[];
};

// TODO メッセージ一覧ページ : MessageCardsではMuiのBoxを利用する
// TODO メッセージ一覧ページ : Box内でmap関数を利用してMuiのCardを挿入する

export const MessageCards = ({ messages }: Props) => {
  return (
    <Box>
      {messages
      .filter((item) => {
        return item.studentLaboratory.status === 'LIKE_FROM_BOTH';
      })
      
      .map((message, i) => (
        <Card key={i} sx={{ minWidth: 275, m: 5}}>
          <CardContent>
            <Typography variant="h5" component="div">
              {message.laboratory.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {message.university.name}
           </Typography>
        
          </CardContent>
          <CardActions>
            <Button size="small">やりとりを見る</Button>
          </CardActions>
        </Card>
      ))}
    </Box>

  );
};