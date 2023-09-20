// TODO メッセージ一覧ページ用mockデータ : Messageの型を定義し,exportする

export type Message = {
    studentLaboratory: StudentLaboratory;
    laboratory: Laboratory;
  };
  
  export type StudentLaboratory = {
    status: string;
    id: number;
  }

  export type University = {
    name: string
  }

  export type Laboratory = {
    name: string;
    imageUrl: string;
    university: University;
  };

  // TODO メッセージ一覧ページ用mockデータ : mockデータを定義し,exportする
  
  export const MockMessages: Message[] = [
    {
      studentLaboratory: {
        status: 'LIKE_FROM_BOTH',
        id: 1
      },
      laboratory: {
        name: '研究室1',
        imageUrl: 'l_URL',
        university: {
          name: '大学1'
        } 
      },
    },
    {
      studentLaboratory: {
        status: 'LIKE_FROM_BOTH',
        id: 2
      },
      laboratory: {
        name: '研究室2',
        imageUrl: 'l_URL',
        university: {
          name: '大学2'
        }
      }
    }
  ];
  