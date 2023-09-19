"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const useRegisterForm = () => {
  const router = useRouter();
  const [university, setUniversity] = useState<string | null>();
  const [name, setName] = useState<string | null>();
  const [professor, setProfessor] = useState<string | null>();
  const [numStudents, setNumStudents] = useState<number | null>();
  const [comment, setComment] = useState<string | null>();
  const [status, setStatus] = useState<number | null>();
  const [imageUrl, setImageUrl] = useState<string | null>();
  const [laboratoryUrl, setLaboratoryUrl] = useState<string | null>();

  const handleSubmit = () => {
    if (
      !university ||
      !name ||
      !professor ||
      !numStudents ||
      !comment ||
      status === null || 
      !imageUrl ||
      !laboratoryUrl
    ) {
      window.alert("すべての項目を入力してください");  
    } else {
      window.alert("登録が完了しました");
      console.log({
        university: university,
        name: name,
        professor: professor,
        num_students: numStudents,
        comment: comment,
        status: status,
        image_url: imageUrl,
        laboratory_url: laboratoryUrl,
      });
      router.push("/");
    }
  };

  return {
    setUniversity,
    setName,
    setProfessor,
    setNumStudents,
    setComment,
    setStatus,
    setImageUrl,
    setLaboratoryUrl,
    handleSubmit,
  };
};
