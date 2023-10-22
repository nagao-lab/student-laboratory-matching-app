"use client";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useMessages } from "../hooks/messages";

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
            <Skeleton variant="rounded" height={152}/>
          </Box>
        ))}
    </Box>
  );
}

export const MessageCards = () => {
  const router = useRouter();

  const { data, loading } = useMessages();
  if (loading){
    return <MessageCardSkeleton/>
  }

  const messages = data?.getStudentLaboratoriesByLaboratoryId?.map((studentLaboratory) => {
    return {
      id: studentLaboratory.id,
      student: studentLaboratory.student
      };
    }
  );


  return (
    <Box>
      {messages?.map((message, i) => (
        <Card key={i} sx={{ minWidth: 275, m: 5 }}>
        <CardActionArea>
          <CardContent
            onClick={() => {
              router.push(`/messages/${message.id}`);
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={2}>
                <Avatar
                  alt={message.student.name}
                  src={message.student.imageUrl}
                  sx={{ width: 120, height: 120 }}
                />  
              </Grid>
              <Grid item xs={12} md={10}>
                <Typography sx={{ marginTop: 1 }} variant="h3" component="div">
                  {message.student.name}
                </Typography>
                <Typography sx={{ marginTop: 1 }} variant="h5" component="div">
                  {message.student.university.name}
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
