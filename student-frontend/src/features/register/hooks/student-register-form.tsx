"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { S3Client, PutObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const useRegisterForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [gender, setGender] = useState<number | null>();
  const [university, setUniversity] = useState<string | null>();
  const [grade, setGrade] = useState<number | null>();
  const [comment, setComment] = useState("");
  const [interest, setInterest] = useState("");
  const [birthday, setBirthday] = useState<Date | null>();
  const [prefecture, setPrefecture] = useState<string | null>();
  const [gpa, setGpa] = useState(3.0);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<number | null>();

  const region = process.env.NEXT_PUBLIC_REGION ? process.env.NEXT_PUBLIC_REGION : '';
  const accessKeyId = process.env.NEXT_PUBLIC_ACCESS_KEY_ID ? process.env.NEXT_PUBLIC_ACCESS_KEY_ID : ''
  const secretAccessKey = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY ? process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY : ''

  const s3 = new S3Client({
    region: region,
    credentials: {
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey
    }
  });

  async function uploadImage(file: File) {
    try {
      const key = `${Date.now()}-${file.name}`
      const bucket = process.env.NEXT_PUBLIC_BUCKET_NAME ? process.env.NEXT_PUBLIC_BUCKET_NAME : '';
      await s3.send(
        new PutObjectCommand({
          Body: file,
          Bucket: bucket,
          Key: key
        })
      );
      const command = new GetObjectCommand({
        Bucket: bucket,
        Key: key
      })
      const url = await getSignedUrl(s3, command)
      return url;
    } catch (error) {
      console.log(error)
      return "";
    }
   };
  const handleSubmit = async () => {
    if (
      !name ||
      gender === null ||
      !university ||
      !grade ||
      !comment ||
      !interest ||
      !birthday ||
      !prefecture ||
      !gpa ||
      !file ||
      status === null
    ) {
      window.alert("すべての項目を入力してください")
      console.log(name, gender, university, grade, comment, interest, birthday, prefecture, gpa, file, status ); 
      return;
    }
    
    const url =  await uploadImage(file).then((url) => {
      return url;
    })
    .catch(() => {
      return "";
    });

    console.log(url)
    router.push("/");
  };

  return {
    setName,
    setGender,
    setUniversity,
    setGrade,
    setComment,
    setInterest,
    setBirthday,
    setPrefecture,
    setGpa,
    file,
    setFile,
    setStatus,
    handleSubmit,
  };
};
