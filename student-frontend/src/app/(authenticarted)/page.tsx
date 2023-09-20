"use client";

import {
  LaboratoriesProvider,
  LaboratoryCards,
  LaboratoryForm,
  MockLaboratories,
  useLaboratoriesContext,
} from "@/features/laboratories";
import { Stack } from "@mui/material";
import { useState } from "react";
import { NextPage } from "next";
import { Loading } from "@/components/loading";

const Page: NextPage = () => {
  const [filterVal, setFilterVal] = useState("");
  const [toggle, setToggle] = useState(false);
  const { loading } = useLaboratoriesContext();

  return (
    <LaboratoriesProvider>
      {loading ? (
        <Loading />
      ) : (
        <Stack>
          <LaboratoryForm
            setFilterVal={setFilterVal}
            toggle={toggle}
            setToggle={setToggle}
          />
          <LaboratoryCards
            laboratories={MockLaboratories}
            filterVal={filterVal}
            toggle={toggle}
          />
        </Stack>
      )}
    </LaboratoriesProvider>
  );
};

export default Page;
