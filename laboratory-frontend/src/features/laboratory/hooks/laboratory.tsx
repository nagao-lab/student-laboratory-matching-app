"use client";

import { useLaboratoryQuery } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";

//TODO: IDをフェッチしてくる
export const useLaboratory = () => {
  const { userId } = useSessionContext();
  const { data, loading, error } = useLaboratoryQuery({
    variables: { id: userId },
  });

  return { data, loading, error };
};
