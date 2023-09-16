// TODO メッセージ詳細ページ用mockデータ : Messageの型を定義し,exportする
// TODO メッセージ詳細ページ用mockデータ : mockデータMessageContentを定義し,exportする

export type Message = {
    studentLaboratory: StudentLaboratory;
    from: number;
    content: string;
    createdAt: string;
}

export type StudentLaboratory = {
    student: Student;
    laboratory: Laboratory;
}

export type Student = {
    name: string;

};

export type Laboratory = {
    name: string;
};

export const MockMessageContent: Message[] = [
    {
        studentLaboratory: {
            student: {
                name: '学生1'
            },
            laboratory: {
                name: '研究室1'
            }
        },
        from: 0,
        content: '学生1のメッセージ',
        createdAt: '2023/01/01'
    },
    {
        studentLaboratory: {
            student: {
                name: '学生2'
            },
            laboratory: {
                name: '研究室2'
            }
        },
        from: 1,
        content: '研究室2のメッセージ',
        createdAt: '2023/01/02'
    },
    {
        studentLaboratory: {
            student: {
                name: '学生2'
            },
            laboratory: {
                name: '研究室2'
            }
        },
        from: 0,
        content: '学生2のメッセージ',
        createdAt: '2023/01/02'
    }
]