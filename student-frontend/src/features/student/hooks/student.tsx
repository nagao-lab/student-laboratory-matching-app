"use client";

import { useStudentQuery } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";

//TODO: IDをフェッチしてくる
export const useStudent = () => {
  const { userId } = useSessionContext();
  const { data, loading, error } = useStudentQuery({
    variables: { id: userId },
  });

  return { data, loading, error };
};
