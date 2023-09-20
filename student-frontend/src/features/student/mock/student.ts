// TODO 学生ページ用mockデータ : studentの型を定義し,exportする

export type Student = {
    name: string;
    email: string;
    password: string;
    status: number;
    university: University;
    grade: number;
    major: Major;
    interest: string;
    comment: string;
    prefecture: Prefecture;
    gpa: number;
    gender: number;
    birthday: string;
    image_url: string;
};

export type University = {
    name: string
    max_gpa: number
}

export type Major = {
    name: string
}

export type Prefecture = {
    name: string
}

// TODO 学生ページ用mockデータ : mockデータを定義し,exportする

export const MockStudents: Student[] = [
    {
        name: '学生1',
        email: 'email1',
        password: 'password1',
        status: 1,
        university: {
            name: '大学1',
            max_gpa: 4.0
        },
        grade: 3,
        major: {
            name: '専攻1'
        },
        interest: '興味1',
        comment: 'コメント1',
        prefecture: {
            name: '都道府県1'
        },
        gpa: 3.0,
        gender: 0,
        birthday: '1111/11/11',
        image_url: '/yaruki_moeru_man.png',
    },
    {
        name: '学生2',
        email: 'email2',
        password: 'password2',
        status: 0,
        university: {
            name: '大学2' ,
            max_gpa: 4.5
        },
        grade: 4,
        major: {
            name: '専攻2'
        },
        interest: '興味2',
        comment: 'コメント2',
        prefecture: {
            name: '都道府県2'
        },
        gpa: 4.5,
        gender: 1,
        birthday: '2222/22/22',
        image_url: '/kakedasu_suit5.png',
    },
    {
        name: '学生3',
        email: 'email3',
        password: 'password3',
        status: 0,
        university: {
            name: '大学3' ,
            max_gpa: 4.5
        },
        grade: 2,
        major: {
            name: '専攻3'
        },
        interest: '興味3',
        comment: 'コメント3',
        prefecture: {
            name: '都道府県3'
        },
        gpa: 3.5,
        gender: 2,
        birthday: '3333/33/33',
        image_url: '/salaryman_money.png',
    }
];
