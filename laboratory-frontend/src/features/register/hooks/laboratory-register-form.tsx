"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MatchStatus, useUpdateLaboratoryMutation } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";
import { uploadImage } from "@/lib/s3";

export const useRegisterForm = () => {
  const { userId } = useSessionContext();
  const [updateLaboratoryMutation] = useUpdateLaboratoryMutation();

  const router = useRouter();
  const [name, setName] = useState("");
  const [universityId, setUniversityId] = useState<string | undefined>(
    undefined
  );
  const [comment, setComment] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<MatchStatus | undefined>(undefined);
  const [majorIds, setMajorIds] = useState<string[] | undefined>(undefined);
  const [professor, setProfessor] = useState<string | undefined>(undefined);
  const [numStudents, setNumStudents] = useState<number | undefined>(undefined);
  const [laboratoryUrl, setLaboratoryUrl] = useState<string | undefined>(undefined);


  const handleSubmit = async () => {
    if (
      !name ||
      !universityId ||
      majorIds?.length === 0 ||
      !comment ||
      !professor ||
      !numStudents ||
      !laboratoryUrl ||
      !file ||
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

    console.log(url);
    updateLaboratoryMutation({
      variables: {
        input: {
          id: userId,
          name: name,
          imageUrl: url,
          universityId: universityId,
          comment: comment,
          majorIds: majorIds,
          professor: professor,
          numStudents: numStudents,
          laboratoryUrl: laboratoryUrl,
          status: status 
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
    setUniversityId,
    setComment,
    setMajorIds,
    file,
    setFile,
    setStatus,
    setProfessor,
    setNumStudents,
    setLaboratoryUrl,
    handleSubmit,
  };
};
