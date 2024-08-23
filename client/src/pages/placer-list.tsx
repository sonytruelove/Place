import { useSessionQuery } from "@/entities/session/queries";
import { SignOutButton } from "@/features/auth";
import { FilterForm } from "@/features/placer-list/ui/filter-form";
import PlacerList from "@/features/placer-list/ui/placer-list";
import { UIHeader } from "@/shared/ui/ui-header";
import { useState } from "react";

export function PlacerListPage() {
  const sessionData = useSessionQuery().data;
  const [placerData, setPlacerData] = useState([]);
  return (
    <main className="min-h-screen">
      <UIHeader
        right={
          <div>
            {sessionData?.email}
            <SignOutButton />
          </div>
        }
      />
      <div className="flex">
        <FilterForm className="w-1/3 p-4" setState={setPlacerData} />
        <PlacerList
          className="flex-grow p-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-8"
          queryState={{ skip: 0, take: 10, ...placerData }}
        />
      </div>
    </main>
  );
}
