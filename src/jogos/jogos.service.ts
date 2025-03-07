import { Injectable } from '@nestjs/common';
import { CreateJogoDto } from './dto/create-jogo.dto';
import { UpdateJogoDto } from './dto/update-jogo.dto';
import { Jogo } from './entities/jogo.entity';

@Injectable()
export class JogosService {
  private jogos: Jogo[] = [
    {
      id: 1,
      nome: 'Devil May Cry 5',
      empresa: 'Capcom',
      valor: '150',
      lancamento: '2022-12-05',
      genero: 'hack and slash',
      consoles: 'PC, PS5, XBOX',
      avaliacao: 9.5,
    },
    {
      id: 2,
      nome: 'Palworld',
      empresa: 'Pocketpair',
      valor: '80',
      lancamento: '2024-01-19',
      genero: 'Mundo aberto',
      consoles:
        'PlayStation 5, Xbox Series X e Series S, GeForce Now, Xbox One, Microsoft Windows, Mac OS',
      avaliacao: 9,
    },
  ];

  create(createJogoDto: CreateJogoDto) {
    return 'This action adds a new jogo';
  }

  findAll() {
    return this.jogos;
  }

  findOne(id: number): Jogo | undefined {
    return this.jogos.find((jogos) => jogos.id === id);
  }

  update(id: number, updateJogoDto: UpdateJogoDto) {
    return `This action updates a #${id} jogo`;
  }

  remove(id: number) {
    return `This action removes a #${id} jogo`;
  }
}
