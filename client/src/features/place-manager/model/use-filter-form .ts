import { PlaceState } from "@/shared/types/placeList.type";
import { useForm } from "react-hook-form";

export function useFilterForm(setPlacesData: any) {
  const { register, handleSubmit } = useForm<PlaceState>({
    defaultValues: {
      isUnique: false,
    },
  });

  return {
    register,
    handleSubmit: handleSubmit((data) => {
      setPlacesData(data);
    }),
  };
}
