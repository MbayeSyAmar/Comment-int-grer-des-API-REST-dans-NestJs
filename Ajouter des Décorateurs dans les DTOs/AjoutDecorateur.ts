import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ description: 'Le titre du post' })
  title: string;

  @ApiProperty({ description: 'Le contenu du post' })
  content: string;
}
