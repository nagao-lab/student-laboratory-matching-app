import {
  LaboratoryDetail,
  MockLaboratories,
} from "@/features/laboratory-detail";
import { LaboratoryDetailProvider } from "@/features/laboratory-detail/providers/laboratory-detail";
import { Stack } from "@mui/material";
import { NextPage } from "next";

type Props = {
  params: { laboratoryId: string };
};

const Page: NextPage<Props> = ({ params }: Props) => {
  return (
    <LaboratoryDetailProvider>
      <Stack>
        <LaboratoryDetail
          laboratoryId={params.laboratoryId}
          laboratories={MockLaboratories}
        />
      </Stack>
    </LaboratoryDetailProvider>
  );
};

export default Page;
