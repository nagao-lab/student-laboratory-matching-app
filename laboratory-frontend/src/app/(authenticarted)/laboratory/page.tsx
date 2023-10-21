"use client";

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
  return (
    <LaboratoryProvider>
      <Box>
        <Stack direction="row" spacing={1.0}>
          <LaboratoryImage laboratory={laboratory} loading={loading} />
          <Stack sx={{ width: 1 }} spacing={1.0}>
            <LaboratoryDetail laboratory={laboratory} loading={loading} />
            <LaboratoryComment laboratory={laboratory} loading={loading} />
          </Stack>
        </Stack>
      </Box>
    </LaboratoryProvider>
  );
};

export default Page;
