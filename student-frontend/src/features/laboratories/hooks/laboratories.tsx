import {
  useLaboratoriesQuery,
  useFavoriteLaboratoryMutation,
} from "@/lib/graphql";
import { useSessionContext } from "@/providers/session";

//TODO: IDをフェッチしてくる
export const useLaboratories = () => {
  const { userId } = useSessionContext();
  const { data, loading, error } = useLaboratoriesQuery({
    variables: { id: userId },
  });

  return { data, loading, error };
};

//TODO: studentIDをフェッチしてくる
export const useFavoriteLaboratory = (laboratoryId: string) => {
  const [favoriteLaboratory] = useFavoriteLaboratoryMutation();
  const { userId } = useSessionContext();

  const clickHandler = () => {
    favoriteLaboratory({
      variables: {
        studentId: userId,
        laboratoryId: laboratoryId,
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
  };

  return { clickHandler };
};
