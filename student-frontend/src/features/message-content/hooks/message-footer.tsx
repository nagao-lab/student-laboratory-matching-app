"use client"

import { useCreateMessageMutation } from "@/lib/graphql";
import { useState } from "react";
import { MessageFrom } from "@/lib/graphql";

export const useMessageFooter = () => {
    const [ createMessageMutation ] = useCreateMessageMutation();
    const [message, setMessage] = useState("");

    const onSubmit = (messageID: string) => {
        createMessageMutation({
            variables: {
                input: {
                    messageRoomId: messageID,
                    from: MessageFrom.Studnet, // TODO: スペルミスなおす
                    content: message
                }
            }
        })

        setMessage("")
    }

    return {message, setMessage, onSubmit};
}

