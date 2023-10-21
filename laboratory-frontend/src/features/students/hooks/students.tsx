"use client";

import {
  useStudentsQuery,
  useFavoriteStudentMutation,
} from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";

//TODO: IDをフェッチしてくる
export const useStudents = () => {
  const { userId } = useSessionContext();
  const { data, loading, error } = useStudentsQuery({
    variables: { id: userId },
  });

  return { data, loading, error };
};

//TODO: laboratoryIDをフェッチしてくる
export const useFavoriteStudent = (studentId: string) => {
  const [favoriteStudent] = useFavoriteStudentMutation();
  const { userId } = useSessionContext();

  const clickHandler = () => {
    favoriteStudent({
      variables: {
        laboratoryId: userId,
        studentId: studentId,
      },
    })
      .then((result) => {
        if (result.data?.favoriteStudent === undefined) {
          window.alert("通信に失敗しました。");
          return;
        }
        console.log(result);
      })
      .catch((error) => {
        console.log("error:", error);
      });

    window.location.reload();
    console.log(studentId);
  };

  return { clickHandler };
};
