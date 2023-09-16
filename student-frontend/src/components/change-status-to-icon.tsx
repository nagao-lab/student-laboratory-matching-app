'use client';

import { Button } from "@mui/material";
import { Favorite, FavoriteBorder} from '@mui/icons-material';
import { Laboratory } from "../features/laboratories/mock/laboratories";
import { useState } from "react";

  
type Props = {
    laboratory: Laboratory;
  };

export const  ChangeStatusToIcon = ({laboratory}: Props) => {
    const [status, setStatus] = useState(laboratory.studentLaboratory.status);
    
    return status === "BLANK" || status === "LIKE_FROM_LABORATORY"
    ?(<Button
        variant="outlined"
        startIcon={<FavoriteBorder/>}
        onClick={()=>{
          console.log(laboratory.name,"before: ", laboratory.studentLaboratory.status)

          status === "BLANK"
            ? setStatus("LIKE_FROM_STUDENT")
            : setStatus("LIKE_FROM_BOTH")
          
          setStatus(
            (pre_status)=>{
              laboratory.studentLaboratory.status = pre_status
              console.log(laboratory.name,"after: ", laboratory.studentLaboratory.status)

              return pre_status
            }
          )

        }}
      >
      興味なし
    </Button>)

    :(<Button
        variant="contained"
        startIcon={<Favorite />}
        onClick={()=>{
          console.log(laboratory.name,"before: ", laboratory.studentLaboratory.status)

          status === "LIKE_FROM_BOTH"
            ? window.alert("マッチング済です")
            : setStatus("BLANK")
          
          setStatus(
            (pre_status)=>{
              laboratory.studentLaboratory.status = pre_status
              console.log(laboratory.name,"after: ", laboratory.studentLaboratory.status)
              return pre_status
            }
          )

          }}
        
    >
    興味あり
    </Button>
    );
};