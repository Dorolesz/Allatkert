import { IsNotEmpty, IsOptional, IsString, IsInt, Min } from 'class-validator';

export class CreateAnimalDto {
  @IsNotEmpty()
  @IsString()
  nev: string;

  @IsNotEmpty()
  @IsString()
  faj: string;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  eletkor: number;

  @IsOptional()
  @IsString()
  orokbefogadoNeve: string;
}
