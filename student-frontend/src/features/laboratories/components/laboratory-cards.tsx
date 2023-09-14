import { Box, Card, CardContent, Typography } from "@mui/material";
import { Laboratory } from "../mock/laboratories";

// TODO 研究室一覧ページ : コンポーネントのPropsの型を定義する

type Props = {
  laboratories: Laboratory[];
};

// TODO 研究室一覧ページ : MuiのBoxを利用する
// TODO 研究室一覧ページ : Boxの中で,map関数を利用してMuiのCardを挿入する
// TODO 研究室一覧ページ : Cardの間にスペースを入れる

export const LaboratoryCards = ({ laboratories }: Props) => {
  return (
    <Box>
      {laboratories.map((laboratory, i) => (
        <Card key={i}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {laboratory.name}
            </Typography>
            <Typography variant="body2" component="p">
              {laboratory.comment}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};
