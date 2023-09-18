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
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState<number | null>();

  const handleSubmit = () => {
    if (
      !name ||
      !gender ||
      !university ||
      !grade ||
      !comment ||
      !interest ||
      !birthday ||
      !prefecture ||
      !gpa ||
      !imageUrl ||
      !status
    ) {
      window.alert("すべての項目を入力してください");
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
      image_url: imageUrl,
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
    setImageUrl,
    setStatus,
    handleSubmit,
  };
};
