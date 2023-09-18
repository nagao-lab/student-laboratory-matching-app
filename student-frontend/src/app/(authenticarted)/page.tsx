
'use client';

import { LaboratoryCards, LaboratoryForm, MockLaboratories } from "@/features/laboratories";
import { Stack } from "@mui/material";
import { useState } from "react";
import { NextPage } from "next";

// TODO 研究室一覧ページ（mock） : MuiのStackを親要素として利用する(directionにcolumnを指定)
// TODO 研究室一覧ページ（mock） : コンポーネントにmockデータを渡して表示する

const Page: NextPage = () => {
  const [filterVal, setFilterVal] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <Stack>
      <LaboratoryForm setFilterVal={setFilterVal} setToggle={setToggle}/>
      <LaboratoryCards laboratories={MockLaboratories} filterVal={filterVal} toggle={toggle}/>
    </Stack>
  )
}

export default Page;
