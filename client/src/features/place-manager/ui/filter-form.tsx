import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { UISelectField } from "@/shared/ui/ui-selected-field";
import { UICheckBox } from "@/shared/ui/ui-checkbox";
import { useFilterForm } from "../model/use-filter-form ";

export function FilterForm(setState: any) {
  const { register, handleSubmit } = useFilterForm(setState.setState);
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UISelectField
        label="Places"
        selectProps={{ ...register("searchArea") }}
        options={[
          { value: "My", label: "My" },
          { value: "Other", label: "Other" },
          { value: "All", label: "All" },
        ]}
      />
      <UICheckBox label="Unique only" {...register("isUnique")} />
      <UITextField label="Search" inputProps={{ ...register("searchText") }} />
      <UIButton variant="primary" type="submit">
        Найти
      </UIButton>
    </form>
  );
}
