// TODO メッセージ一覧ページ用mockデータ : Messageの型を定義し,exportする

export type Message = {
    studentLaboratory: StudentLaboratory;
    laboratory: Laboratory;
    university: University;
  };
  
  export type StudentLaboratory = {
    status: string;
  }

  export type Laboratory = {
    name: string;
  };

  export type University = {
    name: string
  }
  
  // TODO メッセージ一覧ページ用mockデータ : mockデータを定義し,exportする
  
  export const MockMessages: Message[] = [
    {
      studentLaboratory: {
        status: 'LIKE_FROM_BOTH'
      },
      laboratory: {
        name: '研究室1'
      },
      university: {
        name: '大学1'
      }
    },
    {
      studentLaboratory: {
        status: 'LIKE_FROM_BOTH'
      },
      laboratory: {
        name: '研究室2'
      },
      university: {
        name: '大学2'
      },
    }
  ];
  