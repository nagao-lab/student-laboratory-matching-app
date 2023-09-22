'use client';

// TODO メッセージ詳細ページ（mock） : コンポーネントのPropsの型を定義する
// TODO メッセージ詳細ページ（mock） : MessageDetailコンポーネントを定義する
// TODO メッセージ詳細ページ（mock） : MessageDetailコンポーネントにMockMessageDetailを渡す
// TODO メッセージ詳細ページ（mock） : MessageDetail内ではBoxを利用する

import { Box, CardContent, Typography } from "@mui/material";
import { useGetMessages, useGetStudentLaboratory } from "../hooks/message-content";
import { MessageFrom } from "@/lib/graphql";

type Props = {
    messageRoomId: string;
};

export const MessageContent = ({ messageRoomId }: Props) => {
    const {data: messageData, loading: messageLoading, error: messageError} = useGetMessages({
        messageRoomID: messageRoomId
    })

    const {data: slData, loading: slLoading, error: slError} = useGetStudentLaboratory({
        messageRoomID: messageRoomId
    })
    
    if (messageLoading) {
        return <Box>loading...</Box>;
    }
    
    if (messageError) {
        return <Box>404</Box>;
    }

    if(slLoading){
        return <Box>loading...</Box>;
    }

    if(slError){
        return <Box>404</Box>;
    }
    
    return (
        <Box style={{whiteSpace: "pre-line"}}>
            {
                messageData?.getMessages?.map((message, i) => (
                    <Box key={i} style={
                        message.from == MessageFrom.Studnet ? {
                            display: "flex",
                            justifyContent: "flex-end",
                        } : {
                            display: "flex",
                            justifyContent: "flex-start",
                        }
                    }>
                        <CardContent style={{maxWidth: "50%"}}>
                            {
                                message.from == MessageFrom.Studnet ? (
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
                                    message.from == MessageFrom.Studnet ? {
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
                                message.from == MessageFrom.Studnet ? {
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


//             <Typography
//               variant="body2"
//               component="p"
//               style={
//                 message.from == 0
//                   ? {
//                       textAlign: "right",
//                     }
//                   : undefined
//               }
//             >
//               {message.createdAt}
//             </Typography>
//           </CardContent>
//         </Box>
//       ))}
//     </Box>
//   );
// };
