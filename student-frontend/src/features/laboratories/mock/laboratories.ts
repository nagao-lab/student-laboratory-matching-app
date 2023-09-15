// TODO 研究室一覧ページ用mockデータ : Laboratoryの型を定義し,exportする

export type Laboratory = {
  name: string;
  comment: string;
  university: University;
  major: Major;
};

export type University = {
  name: string
}

export type Major = {
  name: string
}

// TODO 研究室一覧ページ用mockデータ : mockデータを定義し,exportする


export const MockLaboratories: Laboratory[] = [
  {
    name: '研究室1',
    comment: '研究室1のコメント',
    university: {
      name: '大学1'
    },
    major: {
      name: '学部1'
    }
  },
  {
    name: '研究室2',
    comment: '研究室2のコメント',
    university: {
      name: '大学2'
    },
    major: {
      name: '学部2'
    }
  }
];
