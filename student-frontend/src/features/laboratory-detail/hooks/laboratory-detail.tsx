"use client";

import { useLaboratoryQuery } from "@/lib/graphql";

type Props = {
  laboratoryId: string;
};

export const useLaboratoryDetail = ({ laboratoryId }: Props) => {
  const { data, loading, error } = useLaboratoryQuery({
    variables: {
      id: laboratoryId,
    },
  });
  return { data, loading, error };
};
