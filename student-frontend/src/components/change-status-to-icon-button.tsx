'use client';

import { Button } from "@mui/material";
import { Favorite} from '@mui/icons-material';

  
type Props = {
    status: string;
  };

export const  ChangeStatusToIconButton = ({status}: Props) => {
    
    return status === "BLANK" || status === "LIKE_FROM_LABORATORY"
    ?(<Button
        variant="contained"
        sx={{ backgroundColor : '#ff00ff' }}
        startIcon={<Favorite />}
        onClick={()=>{
          return null;
        }}
      >
      興味あり
    </Button>
    )

    :(<Button
        variant="contained"
        sx={{ color: '#888888', backgroundColor : '#cccccc' }}
        startIcon={<Favorite />}
        onClick={()=>{
          return null;
        }}   
      >
      興味あり
    </Button>
    );
};