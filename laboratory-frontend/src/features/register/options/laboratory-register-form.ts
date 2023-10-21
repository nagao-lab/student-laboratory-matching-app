import { MatchStatus } from "@/lib/graphql";

// TODO : 本当はAPIから取得する
const universityOptions = [
  { label: "東京大学", value: "id1" },
  { label: "京都大学", value: "id2" },
];

// TODO : 本当はAPIから取得する
const majorOptions = [
  { label: "情報学", value: "id1" },
  { label: "工学", value: "id2" },
  { label: "理学", value: "id3" },
];

const gradeOptions = [
  { label: "1年", value: 1 },
  { label: "2年", value: 2 },
  { label: "3年", value: 3 },
  { label: "4年", value: 4 },
];

// TODO : 本当はAPIから取得する
const prefectureOptions = [
  { label: "北海道", value: "id1" },
  { label: "青森県", value: "id2" },
];

const statusOptions = [
  { label: "学生を探している", value: MatchStatus.Active },
  { label: "学生を探していない", value: MatchStatus.Inactive },
];

export const getOptions = () => {
  return {
    universityOptions,
    majorOptions,
    gradeOptions,
    prefectureOptions,
    statusOptions,
  };
};
