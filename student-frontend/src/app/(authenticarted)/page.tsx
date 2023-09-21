"use client";

import {
  LaboratoriesProvider,
  LaboratoryCards,
  LaboratoryForm,
} from "@/features/laboratories";
import { Stack } from "@mui/material";
import { useState } from "react";
import { NextPage } from "next";

const Page: NextPage = () => {
  const [filterVal, setFilterVal] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <LaboratoriesProvider>
      <Stack>
        <LaboratoryForm
          setFilterVal={setFilterVal}
          toggle={toggle}
          setToggle={setToggle}
        />
        <LaboratoryCards
          filterVal={filterVal}
          toggle={toggle}
        />
      </Stack>
   </LaboratoriesProvider>
  );
};

export default Page;
