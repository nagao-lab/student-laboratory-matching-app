"use client";

import { useStudentQuery } from "@/lib/graphql";

type Props = {
  studentId: string;
};

export const useStudentDetail = ({ studentId }: Props) => {
  const { data, loading, error } = useStudentQuery({
    variables: {
      id: studentId,
    },
  });
  return { data, loading, error };
};
