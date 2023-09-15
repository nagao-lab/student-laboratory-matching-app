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
    gender: string;
    birthday: string;
    image_url: string;
};

export type University = {
    name: string
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
        status: 0,
        university: {
            name: '大学1'
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
        gender: '性別1',
        birthday: '1111/11/11',
        image_url: 'imageurl1',
    }
];