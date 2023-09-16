'use client';

import { Button } from "@mui/material";
import { Favorite, FavoriteBorder} from '@mui/icons-material';

  
type Props = {
    status: string;
  };

export const  ChangeStatusToIconButton = ({status}: Props) => {
    
    return status === "BLANK" || status === "LIKE_FROM_LABORATORY"
    ?(<Button
        variant="outlined"
        startIcon={<FavoriteBorder/>}
        onClick={()=>{
          return null;
        }}
      >
      興味なし
    </Button>
    )

    :(<Button
        variant="contained"
        startIcon={<Favorite />}
        onClick={()=>{
          return null;
        }}   
      >
      興味あり
    </Button>
    );
};