"use client"

import { useLaboratoryQuery } from "@/lib/graphql";
// TODO: IDを引数にする
export const useLaboratoryDetail = () => {
    const { data, loading, error } = useLaboratoryQuery({
      variables: {
         id: "1"
      },
    });
    return {data, loading, error}
}