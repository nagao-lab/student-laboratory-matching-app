"use client";

import {
  StudentsProvider,
  StudentCards,
  StudentForm,
} from "@/features/students";
import { Stack } from "@mui/material";
import { useState } from "react";
import { NextPage } from "next";

const Page: NextPage = () => {
  const [filterVal, setFilterVal] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <StudentsProvider>
      <Stack>
        <StudentForm
          setFilterVal={setFilterVal}
          toggle={toggle}
          setToggle={setToggle}
        />
        <StudentCards filterVal={filterVal} />
      </Stack>
    </StudentsProvider>
  );
};

export default Page;
