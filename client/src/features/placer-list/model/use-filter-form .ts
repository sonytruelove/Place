import { useForm } from "react-hook-form";
import { PlacerQueryState } from "../type/placer-list.type";

export function useFilterForm(setPlacerData: any) {
  const { register, handleSubmit } = useForm<PlacerQueryState>({});

  return {
    register,
    handleSubmit: handleSubmit((data) => {
      setPlacerData(data);
    }),
  };
}
