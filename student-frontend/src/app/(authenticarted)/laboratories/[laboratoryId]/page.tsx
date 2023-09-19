import { LaboratoryDetail, MockLaboratories } from "@/features/laboratory-detail";
import { Stack } from "@mui/material";

// 研究室詳細ページ（mock）

import { NextPage } from "next";

type Props = {
  laboratoryId: string;
};

const Page: NextPage<Props> = ({ laboratoryId }) => {
  return (
    <Stack>
      <LaboratoryDetail laboratoryId={laboratoryId} laboratories={MockLaboratories}/>
    </Stack>
  )
};

export default function P({ params }: { params: { laboratoryId: string } }) {
  return <Page laboratoryId={params.laboratoryId} />;
}