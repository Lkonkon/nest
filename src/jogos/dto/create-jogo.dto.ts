import { Type } from 'class-transformer';
import { IsDate, IsInt, IsString } from 'class-validator';

export class CreateJogoDto {
  @IsString({ message: 'Nome não pode estar vazio' })
  nome: string;
  @IsString({ message: 'Empresa não pode estar vazio' })
  empresa: string;
  @IsString({ message: 'Valor não pode estar vazio' })
  valor: string;
  @Type(() => Date)
  @IsDate({ message: 'Lacamento precisa ser uma data' })
  lancamento: Date;
  @IsString({ message: 'Genero não pode estar vazio' })
  genero: string;
  @IsString({ message: 'Consoles não pode ser vazio' })
  consoles: string;

  @IsInt({ message: 'Avaliação deve ser um número!' })
  avaliacao: number;
}
