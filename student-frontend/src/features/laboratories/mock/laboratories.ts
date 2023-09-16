// TODO 研究室一覧ページ用mockデータ : Laboratoryの型を定義し,exportする

export type Laboratory = {
  ID: number;
  name: string;
  status: string;
  comment: string;
  university: University;
  major: Major;
  studentLaboratory: StudentLaboratory;
};

export type University = {
  name: string
}

export type Major = {
  name: string
}

export type StudentLaboratory = {
  status: string
}

// TODO 研究室一覧ページ用mockデータ : mockデータを定義し,exportする


export const MockLaboratories: Laboratory[] = [
  {
    ID: 1,
    name: '研究室1',
    status: '1',
    comment: '研究室1のコメント',
    university: {
      name: '大学1'
    },
    major: {
      name: '学部1'
    },
    studentLaboratory: {
      status: 'BLANK'
    }
  },
  {
    ID: 2,
    name: '研究室2',
    status: '1',
    comment: '研究室2のコメント',
    university: {
      name: '大学2'
    },
    major: {
      name: '学部2'
    },
    studentLaboratory: {
      status: 'LIKE_FROM_BOTH'
    }
  }
];
