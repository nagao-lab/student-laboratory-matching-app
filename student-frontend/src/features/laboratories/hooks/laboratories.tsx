"use client"

import { useLaboratoriesQuery } from "@/lib/graphql"

export const useLaboratories = () => {
    const { data, loading, error } = useLaboratoriesQuery({
    variables: {
        id: "1",
    },
    });
    return { data, loading, error };
}