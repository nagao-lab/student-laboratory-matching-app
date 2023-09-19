import {
  LaboratoryDetail,
  MockLaboratories,
} from "@/features/laboratory-detail";
import { Stack } from "@mui/material";
import { NextPage } from "next";

type Props = {
  params: { laboratoryId: string } 
};

const Page: NextPage<Props> = ({params}: Props)=> {
  return (
    <Stack>
      <LaboratoryDetail laboratoryId={params.laboratoryId} laboratories={MockLaboratories}/>
    </Stack>
  );
};

export default Page