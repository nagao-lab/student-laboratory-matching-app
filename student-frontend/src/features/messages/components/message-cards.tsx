"use client";

import {
  Box,
  Card,
  CardContent,
  CardActionArea,
  Skeleton,
  Typography,
} from "@mui/material";
import { Message } from "../mock/messages";
import { useRouter } from "next/navigation";

const MessageCardSkeleton = () => {
  const convenienceShowNumber = 10;  // 便宜的に表示するメッセージカードの数
  return (
    <Box>
      {Array(convenienceShowNumber)
        .fill(0)
        .map((_, i) => (
          <Box
          sx = {{ minWidth: 275, m: 5 }}
          key={i}
          >
            <Skeleton variant="rounded" height={100}/>
          </Box>
        ))}
    </Box>
  );
}

type Props = {
  messages: Message[];
};

export const MessageCards = ({ messages }: Props) => {
  const router = useRouter();

  const loading = false;
  if (loading){
    return <MessageCardSkeleton/>
  }

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
              <Typography variant="h5" component="div">
                {message.university.name}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {message.laboratory.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};
