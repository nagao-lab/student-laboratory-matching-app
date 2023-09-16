// TODO 学生ページ :

import Image from "next/image";

type Props = {
  image_url: string;
};

export const StudentImage = ({ image_url }: Props) => {
  return (
    <Image
      src={image_url}
      width={500}
      height={500}
      alt="Picture of the student"
    />
  );
};
