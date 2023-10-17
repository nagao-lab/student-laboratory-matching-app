import { Gender } from "@/lib/graphql";

const genderOptions = [
  { label: "男性", value: Gender.Male },
  { label: "女性", value: Gender.Female },
  { label: "その他", value: Gender.Other },
];

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
  { label: "研究室を探している", value: 0 },
  { label: "研究室を探していない", value: 1 },
];

export const getOptions = () => {
  return {
    genderOptions,
    universityOptions,
    majorOptions,
    gradeOptions,
    prefectureOptions,
    statusOptions,
  };
};
