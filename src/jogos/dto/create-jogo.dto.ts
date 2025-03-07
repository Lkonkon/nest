import { IsDate, IsInt, IsString } from 'class-validator';

export class CreateJogoDto {
  @IsString()
  nome: string;
  @IsString()
  empresa: string;
  @IsString()
  valor: string;
  @IsDate()
  lancamento: Date;
  @IsString()
  genero: string;
  @IsString()
  consoles: string;

  @IsInt()
  avaliacao: number;
}
