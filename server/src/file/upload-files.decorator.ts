import { applyDecorators, UseInterceptors } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

export function UploadFiles() {
  return applyDecorators(
    UseInterceptors(FilesInterceptor('files')),
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          placeid: { type: 'number' },
          files: {
            type: 'array',
            items: {
              type: 'string',
              format: 'binary',
            }
          }
        }
      }
    }),
  );
}
