import { IsNotEmpty, IsInt, IsString, Max, Min } from 'class-validator';

export class CreateSuperheroDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  superpower: string;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(10)
  humilityScore: number;
}
