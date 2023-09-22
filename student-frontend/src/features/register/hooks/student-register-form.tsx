"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { S3 } from "aws-sdk";
import { useUpdateStudentMutation, useGetAllPrefecturesQuery, useGetAllUniversitiesQuery, useGetAllMajorsQuery } from "@/lib/graphql";

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
  const [file, setFile] = useState<File>();
  const [status, setStatus] = useState<number | null>();

  const s3 = new S3({
    region: process.env.NEXT_PUBLIC_S3_REGION ? process.env.NEXT_PUBLIC_S3_REGION : '',
    accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID ? process.env.NEXT_PUBLIC_ACCESS_KEY_ID : '',
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY ? process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY : '',
  });

  const uploadImage = async (file: File) => {
    const params : S3.PutObjectRequest = {
      Bucket: process.env.NEXT_PUBLIC_BUCKET_NAME ? process.env.NEXT_PUBLIC_BUCKET_NAME : '',
      Key: `${Date.now()}-${file.name}`,
      ContentType: file.type,
      Body: file,
    };

    const res = await s3.upload(params).promise();
    return res.Location;
  };
    
  const handleSubmit = () => {
    if (
      !name ||
      gender===null ||
      !university ||
      !grade ||
      !comment ||
      !interest ||
      !birthday ||
      !prefecture ||
      !gpa ||
      !file ||
      status===null
    ) {
      window.alert("すべての項目を入力してください"); 
      return;
    }
    
    const res = uploadImage(file).then((url) => {
    console.log(url);
    return url;
    })
    .catch((err) => {
      console.log(err);
      return "";
    });

    console.log(res)
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
