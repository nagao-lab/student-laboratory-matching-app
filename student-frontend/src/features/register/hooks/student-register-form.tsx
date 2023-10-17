"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { Gender, useUpdateStudentMutation } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";

export const useRegisterForm = () => {
  const { userId } = useSessionContext();
  const [updateStudentMutation] = useUpdateStudentMutation();

  const router = useRouter();
  const [name, setName] = useState("");
  const [gender, setGender] = useState<Gender>();
  const [universityId, setUniversityId] = useState<string | undefined>(
    undefined
  );
  const [grade, setGrade] = useState<number | undefined>(undefined);
  const [comment, setComment] = useState("");
  const [interest, setInterest] = useState("");
  const [birthday, setBirthday] = useState<Date | null>();
  const [prefectureId, setPrefectureId] = useState<string | undefined>(
    undefined
  );
  const [gpa, setGpa] = useState(3.0);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<number | undefined>(undefined);
  const [majorIds, setMajorIds] = useState<string[] | undefined>(undefined);

  const region = process.env.NEXT_PUBLIC_REGION
    ? process.env.NEXT_PUBLIC_REGION
    : "";
  const accessKeyId = process.env.NEXT_PUBLIC_ACCESS_KEY_ID
    ? process.env.NEXT_PUBLIC_ACCESS_KEY_ID
    : "";
  const secretAccessKey = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY
    ? process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY
    : "";

  const s3 = new S3Client({
    region: region,
    credentials: {
      accessKeyId: accessKeyId,
      secretAccessKey: secretAccessKey,
    },
  });

  async function uploadImage(file: File) {
    try {
      const key = `${Date.now()}-${file.name}`;
      const bucket = process.env.NEXT_PUBLIC_BUCKET_NAME
        ? process.env.NEXT_PUBLIC_BUCKET_NAME
        : "";
      await s3.send(
        new PutObjectCommand({
          Body: file,
          Bucket: bucket,
          Key: key,
        })
      );
      return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
    } catch (error) {
      console.log(error);
      return "";
    }
  }
  const handleSubmit = async () => {
    if (
      !name ||
      gender === null ||
      !universityId ||
      !grade ||
      !comment ||
      !interest ||
      !birthday ||
      !prefectureId ||
      !gpa ||
      !file ||
      status === null
    ) {
      window.alert("すべての項目を入力してください");
      console.log(
        name,
        gender,
        universityId,
        grade,
        comment,
        interest,
        birthday,
        prefectureId,
        gpa,
        file,
        status,
        majorIds
      );
      return;
    }

    const url = await uploadImage(file)
      .then((url) => {
        return url;
      })
      .catch(() => {
        return "";
      });

    console.log(url);
    updateStudentMutation({
      variables: {
        input: {
          id: userId,
          imageUrl: url,
          gender: gender,
          birthday: birthday,
          universityId: universityId,
          grade: grade,
          gpa: gpa,
          prefectureId: prefectureId,
          comment: comment,
          interest: interest,
          majorIds: majorIds,
        },
      },
    })
      .then((res) => {
        if (res.data?.updateStudent?.id === undefined) {
          console.log("updateStudent error");
          return;
        }
        router.push("/");
      })
      .catch((err: Error) => {
        alert("別のEmail Address・Passwordを入力してください");
        console.log("updateStudent error");
        console.log(err);
      });
  };

  return {
    setName,
    setGender,
    setUniversityId,
    setGrade,
    setComment,
    setInterest,
    setBirthday,
    setPrefectureId,
    setMajorIds,
    setGpa,
    file,
    setFile,
    setStatus,
    handleSubmit,
  };
};
