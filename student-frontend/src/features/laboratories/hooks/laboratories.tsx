import { useLaboratoriesQuery, useFavoriteLaboratoryMutation} from "@/lib/graphql";


 //TODO: IDをフェッチしてくる
export const useLaboratories = () => {
    const {data, loading, error} = useLaboratoriesQuery(
        {variables: {id: "3"}}
    );

    return {data, loading, error};
}

 //TODO: studentIDをフェッチしてくる
export const useFavoriteLaboratory = (laboratoryId:string) => {
    const [favoriteLaboratory] = useFavoriteLaboratoryMutation();

    const clickHandler = () => {
        favoriteLaboratory({
            variables: {
                studentId: "3",
                laboratoryId: laboratoryId
             },
        })
        .then((result) => {
            if (result.data?.favoriteLaboratory === undefined) {
              window.alert("通信に失敗しました。");
              return;
            }
            console.log(result);
          })
          .catch((error) => {
            console.log("error:", error);
          });
        
        window.location.reload();
        console.log(laboratoryId);
    }
      
    return {clickHandler}
}