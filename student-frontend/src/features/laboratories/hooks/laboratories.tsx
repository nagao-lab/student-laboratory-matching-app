import { useLaboratoriesQuery } from "@/lib/graphql";

 //TODO: IDをフェッチしてくる
export const useLaboratories = () => {
    const {data, loading, error} = useLaboratoriesQuery(
        {variables: {id: "3"}}
    );

    return {data, loading, error};
}