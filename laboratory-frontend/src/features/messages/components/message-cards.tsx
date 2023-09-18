// TODO メッセージ一覧ページ : MessageCardsコンポーネントを作成
// TODO メッセージ一覧ページ : MessageCardsコンポーネント用のPropsを定義
// TODO メッセージ一覧ページ : MessageCardsではMuiのBoxを利用する
// TODO メッセージ一覧ページ : Box内でmap関数を利用してMuiのCardを挿入する

// TODO メッセージ一覧ページ : MessageCardsコンポーネントを作成

"use client";

import { Box, Card, CardContent, CardActionArea, Typography } from "@mui/material";
import { Message } from "../mock/messages";
import { useRouter } from "next/navigation";

// TODO メッセージ一覧ページ : MessageCardsコンポーネント用のPropsを定義

type Props = {
  messages: Message[];
};

// TODO メッセージ一覧ページ : MessageCardsではMuiのBoxを利用する
// TODO メッセージ一覧ページ : Box内でmap関数を利用してMuiのCardを挿入する

export const MessageCards = ({ messages }: Props) => {
  const router = useRouter()
  
  return (
    <Box>
      {messages
      
      .map((message, i) => (
        <Card key={i} sx={{ minWidth: 275, m: 5}}>
          <CardActionArea>
          <CardContent onClick={()=>{
            console.log(message.university.name,'の', message.student.name, 'が押下された')
            
            router.push(`/messages/${message.studentLaboratory.id}`)
            }}>
            <Typography variant="h5" component="div">
              {message.student.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {message.university.name}
           </Typography>
        
          </CardContent>
          </CardActionArea>
          
        </Card>
      ))}
    </Box>

  );
};