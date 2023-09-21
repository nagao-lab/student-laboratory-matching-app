"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

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
      console.log({
        name: name,
        gender: gender,
        university: university,
        grade: grade,
        comment: comment,
        interest: interest,
        birthday: birthday?.toString(),
        prefecture: prefecture,
        gpa: gpa,
        file: file,
        status: status,
      });      
      return;
    }

    console.log({
      name: name,
      gender: gender,
      university: university,
      grade: grade,
      comment: comment,
      interest: interest,
      birthday: birthday?.toString(),
      prefecture: prefecture,
      gpa: gpa,
      file: file,
      status: status,
    });
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
