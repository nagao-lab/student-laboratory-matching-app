import { useLaboratoriesQuery, useFavoriteLaboratoryMutation } from "@/lib/graphql";
import { useState } from "react";

 //TODO: IDをフェッチしてくる
export const useLaboratories = () => {
    const {data, loading, error} = useLaboratoriesQuery(
        {variables: {id: "1"}}
    );

    return {data, loading, error};
}

 //TODO: IDをフェッチしてくる
export const useFavoriteLaboratory = (laboratoryId:string) => {
    const [state, setState] = useState("");
    const [favoriteLaboratory] = useFavoriteLaboratoryMutation();

    const clickHandler = () => {
        favoriteLaboratory({
            variables: {
                studentId: "1",
                laboratoryId: laboratoryId
             },
        })
        .then((result) => {
            if (result.data?.favoriteLaboratory === undefined) {
              window.alert("通信に失敗しました。");
              return;
            }
            setState(String(result.data?.favoriteLaboratory));
            console.log(result);
          })
          .catch((error) => {
            console.log("error:", error);
          });
    }
      
      return {state, clickHandler}
}