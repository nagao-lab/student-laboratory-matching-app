'use client';
// TODO メッセージ詳細ページ（mock） : コンポーネントのPropsの型を定義する
// TODO メッセージ詳細ページ（mock） : MessageDetailコンポーネントを定義する
// TODO メッセージ詳細ページ（mock） : MessageDetailコンポーネントにMockMessageDetailを渡す
// TODO メッセージ詳細ページ（mock） : MessageDetail内ではBoxを利用する

import { Box, CardContent, Typography } from "@mui/material";
import { useGetMessages, useGetStudentLaboratory } from "../hooks/message-content";
import { UserType } from "@/lib/graphql";
import { LoadingBar } from "@/components/loading-bar";

type Props = {
    messageRoomId: string;
};

export const MessageContent = ({ messageRoomId }: Props) => {
    const {data: messageData, loading: messageLoading} = useGetMessages({
        messageRoomID: messageRoomId
    })

    const {data: slData, loading: slLoading} = useGetStudentLaboratory({
        messageRoomID: messageRoomId
    })

    if (messageLoading) {
        return <LoadingBar />;
    }

    if(slLoading){
        return <LoadingBar />;
    }

    return (
        <Box style={{whiteSpace: "pre-line"}}>
            {
                messageData?.getMessages?.map((message, i) => (
                    <Box key={i} style={
                        message.from == UserType.Studnet ? {
                            display: "flex",
                            justifyContent: "flex-end",
                        } : {
                            display: "flex",
                            justifyContent: "flex-start",
                        }
                    }>
                        <CardContent style={{maxWidth: "50%"}}>
                            {
                                message.from == UserType.Studnet ? (
                                    <Typography 
                                        variant="body2"
                                        component="p"
                                        style={{textAlign:"right"}}
                                    >
                                        {slData?.getStudentLaboratoriesById?.student.name}
                                    </Typography>
                                ) : (
                                    <Typography
                                        variant="body2"
                                        component="p"
                                    >
                                        {slData?.getStudentLaboratoriesById?.laboratory.name}
                                    </Typography>
                                )
                            }<Box style={{
                                display: "flex",
                                justifyContent: "flex-end"
                            }}>
                                <Typography variant="h5" component="h2" style={
                                    message.from == UserType.Studnet ? {
                                        backgroundColor: "#8EB8FF",
                                        borderRadius: 10,
                                        padding: 10,
                                    } : {
                                        backgroundColor: "#DCDCDC",
                                        borderRadius: 10,
                                        padding: 10,
                                    }
                                }>
                                    {message.content}
                                </Typography>
                            </Box>

                            <Typography variant="body2" component="p" style={
                                message.from == UserType.Studnet ? {
                                    textAlign: "right",
                                } : undefined
                            }>
                                {message.createdAt}
                            </Typography>
                        </CardContent>
                    </Box>
                ))
            }
        </Box>
    )
}