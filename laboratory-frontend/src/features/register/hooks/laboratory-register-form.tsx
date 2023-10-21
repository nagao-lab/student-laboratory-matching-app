"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Gender, useUpdateLaboratoryMutation } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";
import { uploadImage } from "@/lib/s3";

export const useRegisterForm = () => {
  const { userId } = useSessionContext();
  const [updateLaboratoryMutation] = useUpdateLaboratoryMutation();

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
    updateLaboratoryMutation({
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
        if (res.data?.updateLaboratory?.id === undefined) {
          console.log("updateLaboratory error");
          return;
        }
        router.push("/");
      })
      .catch((err: Error) => {
        alert("別のEmail Address・Passwordを入力してください");
        console.log("updateLaboratory error");
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
