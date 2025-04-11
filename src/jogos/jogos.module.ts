import { Module } from '@nestjs/common';
import { JogosService } from './jogos.service';
import { JogosController } from './jogos.controller';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [JogosController],
  providers: [JogosService, PrismaService, AuthService],
})
export class JogosModule {}
