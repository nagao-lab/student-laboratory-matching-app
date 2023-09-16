import { StudentCards, MockStudents } from "@/features/students";
import { Stack } from "@mui/material";
import { NextPage } from "next";

// TODO 研究室一覧ページ（mock） : MuiのStackを親要素として利用する(directionにcolumnを指定)
// TODO 研究室一覧ページ（mock） : コンポーネントにmockデータを渡して表示する

const Page: NextPage = () => {
  return (
    <Stack>
      <StudentCards students={MockStudents} />
    </Stack>
  )
}

export default Page;
