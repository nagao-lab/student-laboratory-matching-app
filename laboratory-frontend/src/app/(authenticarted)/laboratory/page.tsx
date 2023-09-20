// TODO 研究室ページ : LaboratoryInterestコンポーネントを利用する
// TODO 研究室ページ : LaboratoryInterestにmockデータを渡す
// TODO 研究室ページ : LaboratoryCommentコンポーネントを利用する
// TODO 研究室ページ : LaboratoryCommentにmockデータを渡す

import { MockLaboratories } from "@/features/laboratory";
import { LaboratoryImage } from "@/features/laboratory/components/laboratory-image";
import { LaboratoryDetail } from "@/features/laboratory/components/laboratory-interest";
import { LaboratoryComment } from "@/features/laboratory/components/laboratory-comment";
import { Box, Stack } from "@mui/material";
import { NextPage } from "next";

const Page: NextPage = () => {
  return<Box>
    <Stack direction="row" spacing={1.0}>
      <LaboratoryImage laboratory={MockLaboratories[0]}/>
      <Stack sx={{ width: 1 }}>
        <LaboratoryDetail laboratory={MockLaboratories[0]}/>
        <LaboratoryComment laboratory={MockLaboratories[0]}/>
      </Stack>
    </Stack>laboratory</Box>
}

export default Page;