// TODO 研究室一覧ページ用mockデータ : Laboratoryの型を定義し,exportする

export type Laboratory = {
  name: string;
  comment: string;
};

// TODO 研究室一覧ページ用mockデータ : mockデータを定義し,exportする

export const MockLaboratories: Laboratory[] = [
  {
    name: "長尾研究室",
    comment: "長尾研究室は、自然言語処理を中心とした研究を行っています。",
  },
  {
    name: "白川研究室",
    comment: "白川研究室は、自然言語処理を中心とした研究を行っています。",
  },
];
