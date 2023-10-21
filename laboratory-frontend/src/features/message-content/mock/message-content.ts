export type Message = {
    studentLaboratory: StudentLaboratory;
    from: number;
    content: string;
    createdAt: string;
}

export type StudentLaboratory = {
    id: number;
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
            id: 1,
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
            id: 1,
            student: {
                name: '学生1'
            },
            laboratory: {
                name: '研究室1'
            }
        },
        from: 1,
        content: '研究室1のメッセージ',
        createdAt: '2023/01/02'
    },
    {
        studentLaboratory: {
            id: 1,
            student: {
                name: '学生1'
            },
            laboratory: {
                name: '研究室1'
            }
        },
        from: 0,
        content: '学生1のメッセージ',
        createdAt: '2023/01/02'
    },
    {
        studentLaboratory: {
            id: 1,
            student: {
                name: '学生1'
            },
            laboratory: {
                name: '研究室1'
            }
        },
        from: 1,
        content: '研究室1のメッセージ',
        createdAt: '2023/01/02'
    },
    {
        studentLaboratory: {
            id: 1,
            student: {
                name: '学生1'
            },
            laboratory: {
                name: '研究室1'
            }
        },
        from: 1,
        content: '研究室1のメッセージ',
        createdAt: '2023/01/02'
    },
    {
        studentLaboratory: {
            id: 1,
            student: {
                name: '学生1'
            },
            laboratory: {
                name: '研究室1'
            }
        },
        from: 1,
        content: '研究室1のメッセージ',
        createdAt: '2023/01/02'
    },
    {
        studentLaboratory: {
            id: 1,
            student: {
                name: '学生1'
            },
            laboratory: {
                name: '研究室1'
            }
        },
        from: 1,
        content: '研究室1のメッセージ',
        createdAt: '2023/01/02'
    },
    {
        studentLaboratory: {
            id: 1,
            student: {
                name: '学生1'
            },
            laboratory: {
                name: '研究室1'
            }
        },
        from: 1,
        content: '研究室1のメッセージ',
        createdAt: '2023/01/02'
    },
]