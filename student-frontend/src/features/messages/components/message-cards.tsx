"use client";

import {
  Box,
  Card,
  CardContent,
  CardActionArea,
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
                console.log(
                  message.university.name,
                  "の",
                  message.laboratory.name,
                  "が押下された"
                );

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
