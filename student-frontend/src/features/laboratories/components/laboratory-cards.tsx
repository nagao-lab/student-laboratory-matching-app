
'use client';

import { Box, Button, Card, CardContent, CardActions, Typography } from "@mui/material";
import { ChangeStatusToIcon } from "../../../../src/components/change-status-to-icon";
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
      {laboratories
      .filter((item) => {
        return item.status==='1';
      })
      
      .map((laboratory, i) => (
        <Card key={i} sx={{ minWidth: 275, m: 5}}>
          <CardContent>
            <Typography variant="h5" component="div">
              {laboratory.university.name} {laboratory.major.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {laboratory.name}
           </Typography>
           
          </CardContent>
          <CardActions>
            <Button size="small"
            onClick={()=>{
              console.log(laboratory.studentLaboratory.status)
            }}
            >
              詳細を見る
            </Button>
          </CardActions>
          <CardContent>
            <ChangeStatusToIcon laboratory={laboratory}/>
          </CardContent>

          
        </Card>
      ))}
    </Box>

    

  );
};
