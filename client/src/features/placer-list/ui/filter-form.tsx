import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { UISelectField } from "@/shared/ui/ui-selected-field";
import { useFilterForm } from "../model/use-filter-form ";

export function FilterForm(setState: any) {
  const { register, handleSubmit } = useFilterForm(setState.setState);
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <UISelectField
        label="Places"
        selectProps={{ ...register("searchArea") }}
        options={[
          { value: "All", label: "All" },
          { value: "My", label: "My" },
        ]}
      />
      <UITextField label="Search" inputProps={{ ...register("searchText") }} />
      <UIButton variant="primary" type="submit">
        Найти
      </UIButton>
    </form>
  );
}
