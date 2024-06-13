import { Account, Place, File } from "@prisma/client";

export class PlaceDTO {
  owner: Account;

  id: number;

  name: string | null;

  files: File[];

  underPlace: Place[];
}
