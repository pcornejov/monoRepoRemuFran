import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';

export class TestCreateDto {
  @IsString()
    userRut: string;
}
