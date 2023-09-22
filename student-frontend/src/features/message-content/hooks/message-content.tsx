"use client";

import { useGetMessagesQuery, useGetStudentLaboratoriesByIdQuery } from "@/lib/graphql";

type Props = {
    messageRoomID: string;
}

export const useGetMessages = ({messageRoomID}: Props) => {
    const {data, loading, error} = useGetMessagesQuery({
        variables: {
            messageRoomId: messageRoomID,
        }
    })
    
    return {data, loading, error}
}

export const useGetStudentLaboratory = ({messageRoomID}: Props) => {
    const {data, loading, error} = useGetStudentLaboratoriesByIdQuery({
        variables: {
            id: messageRoomID
        }
    })

    return {data, loading, error}
}

