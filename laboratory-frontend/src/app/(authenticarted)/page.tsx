
'use client';

import { StudentCards, StudentForm, MockStudents } from "@/features/students";
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
      <StudentForm setFilterVal={setFilterVal} setToggle={setToggle} />
      <StudentCards students={MockStudents} filterVal={filterVal} toggle={toggle}/>
    </Stack>
  )
}

export default Page;
