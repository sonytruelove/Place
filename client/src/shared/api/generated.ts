/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * File Place
 * OpenAPI spec version: 1.0.0
 */
import { createInstance } from "./api-instance";
import type { BodyType } from "./api-instance";

export type FileControllerSearchParams = {
  query: string;
};

export type FileControllerGetAllInPlaceParams = {
  placeid: number;
  count: number;
  offset: number;
};

export type FileControllerUploadBody = {
  files?: Blob[];
  placeid?: number;
};

export interface PatchAccountDTO {
  places: string[];
}

export interface AccountDTO {
  id: number;
  ownerId: number;
  places: string[];
}

export interface GetSessionDTO {
  email: string;
  exp: number;
  iat: number;
  id: number;
}

export interface SignUpDTO {
  email: string;
  name: string;
  password: string;
}

export interface SignInDTO {
  email: string;
  password: string;
}

export interface DownloadFileDTO {
  url: string;
}

export interface FileDTO {
  [key: string]: unknown;
}

export interface CreateUniquePlaceDTO {
  placeName: string;
}

export interface CreatePlaceDTO {
  abovePlaceId: number;
  placeName: string;
}

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1];

export const placeControllerCreate = (
  createPlaceDTO: BodyType<CreatePlaceDTO>,
  options?: SecondParameter<typeof createInstance>,
) =>
  createInstance<void>(
    {
      url: `/places`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createPlaceDTO,
    },
    options,
  );

export const placeControllerGetOne = (
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => createInstance<void>({ url: `/places/${id}`, method: "GET" }, options);

export const uniquePlaceControllerCreateUnique = (
  createUniquePlaceDTO: BodyType<CreateUniquePlaceDTO>,
  options?: SecondParameter<typeof createInstance>,
) =>
  createInstance<void>(
    {
      url: `/uniqueplaces`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: createUniquePlaceDTO,
    },
    options,
  );

export const fileControllerUpload = (
  fileControllerUploadBody: BodyType<FileControllerUploadBody>,
  options?: SecondParameter<typeof createInstance>,
) => {
  const formData = new FormData();
  if (fileControllerUploadBody.placeid !== undefined) {
    formData.append("placeid", fileControllerUploadBody.placeid.toString());
  }
  if (fileControllerUploadBody.files !== undefined) {
    fileControllerUploadBody.files.forEach((value) =>
      formData.append("files", value),
    );
  }

  return createInstance<void>(
    {
      url: `/files`,
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    },
    options,
  );
};

export const fileControllerGetAllInPlace = (
  params: FileControllerGetAllInPlaceParams,
  options?: SecondParameter<typeof createInstance>,
) => createInstance<FileDTO>({ url: `/files`, method: "GET", params }, options);

export const fileControllerSearch = (
  params: FileControllerSearchParams,
  options?: SecondParameter<typeof createInstance>,
) =>
  createInstance<FileDTO>(
    { url: `/files/search`, method: "GET", params },
    options,
  );

export const fileControllerGetOne = (
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => createInstance<FileDTO>({ url: `/files/${id}`, method: "GET" }, options);

export const fileControllerDelete = (
  id: number,
  options?: SecondParameter<typeof createInstance>,
) => createInstance<number>({ url: `/files/${id}`, method: "DELETE" }, options);

export const fileControllerGetUrlFromCurrentPlace = (
  accountid: number,
  placeid: number,
  filename: string,
  options?: SecondParameter<typeof createInstance>,
) =>
  createInstance<DownloadFileDTO>(
    { url: `/files/url/${accountid}/${placeid}/${filename}`, method: "GET" },
    options,
  );

export const fileControllerGetUrlFromUser = (
  accountid: number,
  filename: string,
  options?: SecondParameter<typeof createInstance>,
) =>
  createInstance<DownloadFileDTO>(
    { url: `/files/url/${accountid}/${filename}`, method: "GET" },
    options,
  );

export const authControllerSignIn = (
  signInDTO: BodyType<SignInDTO>,
  options?: SecondParameter<typeof createInstance>,
) =>
  createInstance<void>(
    {
      url: `/auth/sign-in`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signInDTO,
    },
    options,
  );

export const authControllerSignUp = (
  signUpDTO: BodyType<SignUpDTO>,
  options?: SecondParameter<typeof createInstance>,
) =>
  createInstance<void>(
    {
      url: `/auth/sign-up`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: signUpDTO,
    },
    options,
  );

export const authControllerSignOut = (
  options?: SecondParameter<typeof createInstance>,
) => createInstance<void>({ url: `/auth/sign-out`, method: "POST" }, options);

export const authControllerGetSession = (
  options?: SecondParameter<typeof createInstance>,
) =>
  createInstance<GetSessionDTO>(
    { url: `/auth/session`, method: "GET" },
    options,
  );

export const accountControllerGetAccount = (
  options?: SecondParameter<typeof createInstance>,
) => createInstance<AccountDTO>({ url: `/account`, method: "GET" }, options);

export const accountControllerPatchAccount = (
  patchAccountDTO: BodyType<PatchAccountDTO>,
  options?: SecondParameter<typeof createInstance>,
) =>
  createInstance<PatchAccountDTO>(
    {
      url: `/account`,
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      data: patchAccountDTO,
    },
    options,
  );

export type PlaceControllerCreateResult = NonNullable<
  Awaited<ReturnType<typeof placeControllerCreate>>
>;
export type PlaceControllerGetOneResult = NonNullable<
  Awaited<ReturnType<typeof placeControllerGetOne>>
>;
export type UniquePlaceControllerCreateUniqueResult = NonNullable<
  Awaited<ReturnType<typeof uniquePlaceControllerCreateUnique>>
>;
export type FileControllerUploadResult = NonNullable<
  Awaited<ReturnType<typeof fileControllerUpload>>
>;
export type FileControllerGetAllInPlaceResult = NonNullable<
  Awaited<ReturnType<typeof fileControllerGetAllInPlace>>
>;
export type FileControllerSearchResult = NonNullable<
  Awaited<ReturnType<typeof fileControllerSearch>>
>;
export type FileControllerGetOneResult = NonNullable<
  Awaited<ReturnType<typeof fileControllerGetOne>>
>;
export type FileControllerDeleteResult = NonNullable<
  Awaited<ReturnType<typeof fileControllerDelete>>
>;
export type FileControllerGetUrlFromCurrentPlaceResult = NonNullable<
  Awaited<ReturnType<typeof fileControllerGetUrlFromCurrentPlace>>
>;
export type FileControllerGetUrlFromUserResult = NonNullable<
  Awaited<ReturnType<typeof fileControllerGetUrlFromUser>>
>;
export type AuthControllerSignInResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignIn>>
>;
export type AuthControllerSignUpResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignUp>>
>;
export type AuthControllerSignOutResult = NonNullable<
  Awaited<ReturnType<typeof authControllerSignOut>>
>;
export type AuthControllerGetSessionResult = NonNullable<
  Awaited<ReturnType<typeof authControllerGetSession>>
>;
export type AccountControllerGetAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerGetAccount>>
>;
export type AccountControllerPatchAccountResult = NonNullable<
  Awaited<ReturnType<typeof accountControllerPatchAccount>>
>;