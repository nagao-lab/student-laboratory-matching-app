import { Box, Card, CardContent} from "@mui/material";
import { MessageContent } from "../mock/message-content";
// TODO メッセージ詳細ページ（mock） : コンポーネントのPropsの型を定義する

type Props = {
    messageContent: MessageContent[];
};

// TODO メッセージ詳細ページ（mock） : MessageDetailコンポーネントを定義する
// TODO メッセージ詳細ページ（mock） : MessageDetailコンポーネントにMockMessageDetailを渡す
// TODO メッセージ詳細ページ（mock） : MessageDetail内ではBoxを利用する

export const MessageCards = ({ messageContent }: Props) => {
    return (
        <Box>
            {messageContent.map((messageContent, i) => (
                <Card key={i}>
                    <CardContent>
                        {messageContent.content}
                    </CardContent>
                </Card>
            ))}
        </Box>
    )
}