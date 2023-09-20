// TODO メッセージ一覧ページ : MessageCardsコンポーネントを作成

"use client";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Typography,
} from "@mui/material";
import { Message } from "../mock/messages";
import { useRouter } from "next/navigation";

type Props = {
  messages: Message[];
};

export const MessageCards = ({ messages }: Props) => {
  const router = useRouter();

  return (
    <Box>
      {messages.map((message, i) => (
        <Card key={i} sx={{ minWidth: 275, m: 5 }}>
          <CardActionArea>
            <CardContent
              onClick={() => {
                router.push(`/messages/${message.studentLaboratory.id}`);
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={1}>
                  <Avatar
                    alt={message.laboratory.name}
                    src={message.laboratory.imageUrl}
                    sx={{ width: 120, height: 120 }}
                  />  
                </Grid>
                <Grid item xs={12} md={11}>
                  <Typography sx={{ marginTop: 1 }} variant="h3" component="div">
                    {message.laboratory.name}
                  </Typography>
                  <Typography sx={{ marginTop: 1 }} variant="h5" component="div">
                    {message.laboratory.university.name}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};
