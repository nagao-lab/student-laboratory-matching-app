// TODO : 本当はAPIから取得する
const universityOptions = [
  { label: "東京大学", value: "id1" },
  { label: "京都大学", value: "id2" },
];

const statusOptions = [
  { label: "学生を探している", value: 0 },
  { label: "学生を探していない", value: 1 },
];

export const getOptions = () => {
  return {
    universityOptions,
    statusOptions,
  };
};
