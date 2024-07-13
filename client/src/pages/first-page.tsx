import { UIButton } from "@/shared/ui/ui-button";
import { UITextField } from "@/shared/ui/ui-text-field";
import { UISelectField } from "@/shared/ui/ui-selected-field";
import { UILink } from "@/shared/ui/ui-link";
import { UISpinner } from "@/shared/ui/ui-spinner";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UIHeader } from "@/shared/ui/ui-header";
import { SignOutButton } from "@/features/auth/ui/sign-out-button";
import { useSessionQuery } from "@/entities/session/queries";

export default function Home() {
  const { data } = useSessionQuery();
  return (
    <main className="min-h-screen">
      <UIHeader
        right={
          <div>
            {data?.email}
            <SignOutButton />
          </div>
        }
      />
      <UIButton variant="primary">Work</UIButton>
      <UIButton variant="secondary">Work</UIButton>
      <UIButton variant="outlined">Work</UIButton>
      <UIButton disabled variant="outlined">
        Work
      </UIButton>
      <UITextField
        label="Text field"
        inputProps={{ placeholder: "Enter a text" }}
      />
      <UITextField
        error="Text field"
        inputProps={{ placeholder: "Enter a text" }}
      />
      <UITextField inputProps={{ placeholder: "Enter a text" }} />
      <UISelectField
        selectProps={{}}
        options={[
          { value: "1", label: "options" },
          { value: "2", label: "options1" },
        ]}
      />
      <UILink href="https://github.com/sonytruelove/Place">work</UILink>
      <UISpinner className="text-primary-600 v-20 h-20" />
      {/* <UIPageSpinner className="text-primary-600"/> */}
    </main>
  );
}
