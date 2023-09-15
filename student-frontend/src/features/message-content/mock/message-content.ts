// TODO メッセージ詳細ページ用mockデータ : Messageの型を定義し,exportする

export type MessageContent = {
    studentLaboratory: StudentLaboratory;
    from: string;
    content: string;
    created_at: string;
}

export type StudentLaboratory = {
    student: Student;
    laboratory: Laboratory;
}

export type Student = {
    name: string
}

export type Laboratory = {
    name: string
}

// TODO メッセージ詳細ページ用mockデータ : mockデータMessageContentを定義し,exportする
export const MockMessageContent: MessageContent[] = [
    {
        studentLaboratory: {
            student: {
                name: '生徒1'
            },
            laboratory: {
                name: '研究室1'
            }
        },
        from: 'STUDENT',
        content: 'メッセージの内容1',
        created_at: '1111/11/11'
    },
    {
        studentLaboratory: {
            student: {
                name: '生徒2'
            },
            laboratory: {
                name: '研究室2'
            }
        },
        from: 'LABORATORY',
        content: 'メッセージの内容2',
        created_at: '2222/22/22'
    }
];