// TODO 学生詳細ページ用mockデータ


export type Student = {
    ID: number
    name: string;
    status: string;
    interest: string;
    comment: string;
    university: University;
    major: Major;
    grade: number;
    gpa: number;
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
  
  
  export const MockStudents: Student[] = [
    {
      ID:111,
      name: '内藤巧',
      status: '1',
      interest: 'Hogehoge.',
      comment: 'Hello world.',
      university: {
        name: '入江大学'
      },
      major: {
        name: '理学部'
      },
      grade: 3,
      gpa: 3.5,
      studentLaboratory: {
        status: 'BLANK'
      }
    },
    {
      ID:222,
      name: '関口公平',
      status: '1',
      interest: 'Fugafuga.',
      comment: 'Piyo.',
      university: {
        name: '清水大学'
      },
      major: {
        name: '工学部'
      },
      grade: 5,
      gpa: 2.5,
      studentLaboratory: {
        status: 'LIKE_FROM_BOTH'
      }
    }
  ];
  