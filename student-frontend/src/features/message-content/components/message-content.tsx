
// TODO メッセージ詳細ページ（mock） : コンポーネントのPropsの型を定義する

// TODO メッセージ詳細ページ（mock） : MessageDetailコンポーネントを定義する
// TODO メッセージ詳細ページ（mock） : MessageDetailコンポーネントにMockMessageDetailを渡す
// TODO メッセージ詳細ページ（mock） : MessageDetail内ではBoxを利用する

import { Box, Card, CardContent, Typography } from "@mui/material";
import { Message } from "../mock/message-content";

type Props = {
    messages: Message[];
};

export const MessageDetail = ({ messages }: Props) => {
    return (
        <Box style={{whiteSpace: "pre-line"}}>
            {
                messages.map((message, i) => (
                    <Box key={i} style={
                        message.from == 0 ? {
                            display: "flex",
                            justifyContent: "flex-end",
                        } : {
                            display: "flex",
                            justifyContent: "flex-start",
                        }
                    }>
                        <CardContent style={{maxWidth: "50%"}}>
                            {
                                message.from == 0 ? (
                                    <Typography 
                                        variant="body2"
                                        component="p"
                                        style={{textAlign:"right"}}
                                    >
                                        {message.studentLaboratory.student.name}
                                    </Typography>
                                ) : (
                                    <Typography
                                        variant="body2"
                                        component="p"
                                    >
                                        {message.studentLaboratory.laboratory.name}
                                    </Typography>
                                )
                            }<Box style={{
                                display: "flex",
                                justifyContent: "flex-end"
                            }}>
                                <Typography variant="h5" component="h2" style={
                                    message.from == 0 ? {
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
                                message.from == 0 ? {
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

