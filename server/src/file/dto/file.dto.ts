export class FileDTO {
  id: number;

  placeId: number;

  name: string;

  size: number;

  ext: string;

  url: string;

  uploadedAt: Date;
}
export class BufferedFile {
  fieldname: string;

  originalname: string;

  encoding: string;

  mimetype: AppMimeType;

  size: number;

  buffer: Buffer | string;
}

export interface StoredFile extends HasFile, StoredFileMetadata {}

export interface HasFile {
  file: Buffer | string;
}
export interface StoredFileMetadata {
  id: string;
  name: string;
  encoding: string;
  mimetype: AppMimeType;
  size: number;
  updatedAt: Date;
  fileSrc?: string;
}

export type AppMimeType = "image/png" | "image/jpeg";
