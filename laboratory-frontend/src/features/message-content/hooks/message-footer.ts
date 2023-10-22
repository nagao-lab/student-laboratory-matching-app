"use client"

import { UserType, useCreateMessageMutation } from "@/lib/graphql";
import { useState } from "react";

export const useMessageFooter = () => {
    const [ createMessageMutation ] = useCreateMessageMutation();
    const [message, setMessage] = useState("");

    const onSubmit = (messageRoomID: string) => {
        createMessageMutation({
            variables: {
                input: {
                    messageRoomId: messageRoomID,
                    from: UserType.Laboratory,
                    content: message
                }
            }
        })

        setMessage("")
    }

    return {message, setMessage, onSubmit};
}

