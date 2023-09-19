// TODO 研究室ページ用mockデータ : studentの型を定義し,exportする

export type Laboratory = {
    name: string;
    email: string;
    password: string;
    status: number;
    professor: string;
    university: University;
    major: Major;
    comment: string;
    prefecture: Prefecture;
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

// TODO 研究室ページ用mockデータ : mockデータを定義し,exportする

export const MockLaboratories: Laboratory[] = [
    {
        name: '研究室1',
        email: 'email1',
        password: 'password1',
        status: 0,
        professor: '教授1',
        university: {
            name: '大学1'
        },
        major: {
            name: '専攻1'
        },
        comment: 'コメント1',
        prefecture: {
            name: '都道府県1'
        },
        image_url: 'https://image.lgtmoon.dev/222483',
    },
    {
        name: '研究室2',
        email: 'email2',
        password: 'password2',
        status: 0,
        professor: '教授2',
        university: {
            name: '大学2'
        },
        major: {
            name: '専攻2'
        },
        comment: 'コメント2',
        prefecture: {
            name: '都道府県2'
        },
        image_url: 'https://image.lgtmoon.dev/222486',
    },
    {
        name: '研究室3',
        email: 'email3',
        password: 'password3',
        status: 0,
        professor: '教授3',
        university: {
            name: '大学3'
        },
        major: {
            name: '専攻3'
        },
        comment: 'コメント3',
        prefecture: {
            name: '都道府県3'
        },
        image_url: 'https://image.lgtmoon.dev/222487',
    }
];
