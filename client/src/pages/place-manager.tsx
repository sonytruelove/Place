import { useSessionQuery } from "@/entities/session/queries";
import { SignInForm, SignOutButton } from "@/features/auth";
import { FilterForm } from "@/features/place-manager/ui/filter-form";
import { placeControllerGetAvailable } from "@/shared/api/generated";
import { ROUTES } from "@/shared/constants/routes";
import { UIFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";
import { UIHeader } from "@/shared/ui/ui-header";
import { UIPageSpinner } from "@/shared/ui/ui-page-spinner";
import UIPlaceList from "@/shared/ui/ui-place-list";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";

export function PlaceManagerPage() {
  const sessionData = useSessionQuery().data;
  const [placesData, setPlacesData] = useState([]);
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
        <FilterForm className="w-1/3 p-4" setState={setPlacesData} />
        <UIPlaceList
          className="w-2/3 p-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
          state={placesData}
          queryState={{ skip: 0, take: 10, ...placesData }}
        />
      </div>
    </main>
  );
}
