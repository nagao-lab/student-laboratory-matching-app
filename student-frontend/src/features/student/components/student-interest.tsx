// TODO 学生ページ : StudentInterestコンポーネントを作成する
// TODO 学生ページ : StudentInterestコンポーネント用のProps型を定義する
// TODO 学生ページ : StudentInterestではMuiのBoxを利用する

import { Box, Card, CardContent } from "@mui/material";

type Props = {
    interest: string;
  };

  export const StudentInterest = ({ interest }: Props) => {
    return (
        <Box>
            <Card>
                <CardContent>
                    {interest}
                </CardContent>
            </Card>
        </Box>
    )
  }