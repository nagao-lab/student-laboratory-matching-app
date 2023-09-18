// TODO 学生ページ : StudentCommentコンポーネントを作成する
// TODO 学生ページ : StudentCommentコンポーネント用のPropsの型を定義する
// TODO 学生ページ : StudentCommentではMuiのBoxを利用する

import { Box, Card, CardContent } from "@mui/material";

type Props = {
    comment: string;
  };

  export const StudentComment = ({ comment }: Props) => {
    return (
        <Box>
            <Card>
                <CardContent>
                    {comment}
                </CardContent>
            </Card>
        </Box>
    )
  }