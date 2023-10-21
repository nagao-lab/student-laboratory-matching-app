"use client";

import { LaboratoryInterest } from "@/features/laboratory/components/laboratory-interest";
import { LaboratoryComment } from "@/features/laboratory/components/laboratory-comment";
import { LaboratoryDetail } from "@/features/laboratory/components/laboratory-detail";
import { LaboratoryImage } from "@/features/laboratory/components/laboratory-image";
import { Box, Stack } from "@mui/material";
import { NextPage } from "next";
import { LaboratoryProvider } from "@/features/laboratory/providers/laboratory";
import { useLaboratory } from "@/features/laboratory/hooks/laboratory";
import { Laboratory } from "@/lib/graphql";

const Page: NextPage = () => {
  const { data, loading } = useLaboratory();
  const laboratory = data?.laboratory as Laboratory;
  if (loading) return <Box>loading...</Box>;
  return (
    <LaboratoryProvider>
      <Box>
        <Stack direction="row" spacing={1.0}>
          <LaboratoryImage laboratory={laboratory} />
          <Stack sx={{ width: 1 }} spacing={1.0}>
            <LaboratoryDetail laboratory={laboratory} />
            <LaboratoryComment laboratory={laboratory} />
            <LaboratoryInterest laboratory={laboratory} />
          </Stack>
        </Stack>
      </Box>
    </LaboratoryProvider>
  );
};

export default Page;
