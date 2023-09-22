// TODO 研究室詳細ページ用mockデータ
export type Laboratory = {
    ID: number;
    name: string;
    status: number;
    professor: string;
    university: University;
    major: Major;
    studentLaboratory: StudentLaboratory;
    num_students: number;
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

export type StudentLaboratory = {
    status: string
}

export type Prefecture = {
    name: string
}

// TODO 研究室ページ用mockデータ : mockデータを定義し,exportする

export const MockLaboratories: Laboratory[] = [
    {
        ID: 1,
        name: '研究室1',
        status: 1,
        professor: '教授1',
        university: {
            name: '大学1'
        },
        major: {
            name: '専攻1'
        },
        studentLaboratory: {
            status: 'BLANK'
        },
        num_students: 11,
        comment: '研究室1のコメント',
        prefecture: {
            name: '都道府県1'
        },
        image_url: 'https://image.lgtmoon.dev/222483',
    }, 
    {
        ID: 2,
        name: '研究室2',
        status: 1,
        professor: '教授2',
        university: {
            name: '大学2'
        },
        major: {
            name: '専攻2'
        },
        studentLaboratory: {
            status: 'LIKE_FROM_BOTH'
        },
        num_students: 22,
        comment: '研究室2のコメント',
        prefecture: {
            name: '都道府県2'
        },
        image_url: 'https://image.lgtmoon.dev/222483',
    }
]
