import { LaboratoryDetail, MockLaboratories } from "@/features/laboratory-detail";
import { Stack } from "@mui/material";

// 研究室詳細ページ（mock）

import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <Stack>
      <LaboratoryDetail laboratories={MockLaboratories}/>
    </Stack>
  )
};

export default Page;
