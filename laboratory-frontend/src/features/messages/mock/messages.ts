// TODO メッセージ一覧ページ用mockデータ : Messageの型を定義し,exportする

export type Message = {
  studentLaboratory: StudentLaboratory;
  student: Student;
  university: University;
};

export type StudentLaboratory = {
  status: string;
  id: number;
}

export type Student = {
  name: string;
};

export type University = {
  name: string
}

// TODO メッセージ一覧ページ用mockデータ : mockデータを定義し,exportする

export const MockMessages: Message[] = [
  {
    studentLaboratory: {
      status: 'LIKE_FROM_BOTH',
      id: 1
    },
    student: {
      name: '学生1'
    },
    university: {
      name: '大学1'
    }
  },
  {
    studentLaboratory: {
      status: 'LIKE_FROM_BOTH',
      id: 2
    },
    student: {
      name: '学生2'
    },
    university: {
      name: '大学2'
    },
  }
];