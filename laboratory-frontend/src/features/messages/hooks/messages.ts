"use client";

import{ LikeStatus, useMessagesQuery } from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";

export const useMessages = () => {
    const { userId } = useSessionContext();
    const { data, loading, error } = useMessagesQuery({
      variables: { 
        id: userId,
        filter: LikeStatus.LikeFromBoth
       },
    });
  
    return { data, loading, error };
  };