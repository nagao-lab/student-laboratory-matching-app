// TODO 学生一覧ページ用mockデータ : Studentの型を定義し,exportする

export type Student = {
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

// TODO 学生一覧ページ用mockデータ : mockデータを定義し,exportする


export const MockStudents: Student[] = [
  {
    name: '内藤巧',
    status: '1',
    comment: 'Hello world.',
    university: {
      name: '入江大学'
    },
    major: {
      name: '理学部'
    },
    studentLaboratory: {
      status: 'BLANK'
    }
  },
  {
    name: '関口公平',
    status: '1',
    comment: 'hoge',
    university: {
      name: '清水大学'
    },
    major: {
      name: '工学部'
    },
    studentLaboratory: {
      status: 'LIKE_FROM_STUDENT'
    }
  }
];
