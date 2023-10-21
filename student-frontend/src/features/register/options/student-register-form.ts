import { Gender, MatchStatus } from "@/lib/graphql";

const genderOptions = [
  { label: "男性", value: Gender.Male },
  { label: "女性", value: Gender.Female },
  { label: "その他", value: Gender.Other },
];

const gradeOptions = [
  { label: "1年", value: 1 },
  { label: "2年", value: 2 },
  { label: "3年", value: 3 },
  { label: "4年", value: 4 },
];

const statusOptions = [
  { label: "研究室を探している", value: MatchStatus.Active },
  { label: "研究室を探していない", value: MatchStatus.Inactive },
];

export const getOptions = () => {
  return {
    genderOptions,
    gradeOptions,
    statusOptions,
  };
};
