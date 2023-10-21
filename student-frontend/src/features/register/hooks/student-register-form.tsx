"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Gender, useUpdateStudentMutation } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";
import { uploadImage } from "@/lib/s3";

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

  const handleSubmit = async () => {
    if (
      name === "" ||
      gender === null ||
      universityId === undefined ||
      majorIds?.length === 0 ||
      majorIds === undefined ||
      grade === undefined ||
      comment === "" ||
      interest === "" ||
      birthday === null ||
      prefectureId === undefined ||
      gpa === null ||
      file === null ||
      status === null
    ) {
      window.alert("すべての項目を入力してください");
      return;
    }

    const url = await uploadImage(file)
      .then((url) => {
        return url;
      })
      .catch(() => {
        return "";
      });

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
          return;
        }
        router.push("/");
      })
      .catch((err: Error) => {
        alert("別のEmail Address・Passwordを入力してください");
        throw err;
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
