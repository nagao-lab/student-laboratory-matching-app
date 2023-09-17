// TODO フォームのデータ型を整える

export type RegisterFormValues = {
  name: string;
  email: string;
  gender: number | null;
  university: string;
  grade: number | null;
  comment: Text;
  interest: Text;
  birthday: string | null;
  prefecture: string;
  gpa: number | null;
  image_url: string;
  status: number;
  password: string;
};
