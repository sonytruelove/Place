export type PlaceState = {};
export type PlaceQueryState =
  | {
      skip?: number;
      take?: number;
      searchArea?: string;
      isUnique?: boolean;
      searchText?: string;
    }
  | undefined;
