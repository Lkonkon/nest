import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogosModule } from './jogos/jogos.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [JogosModule, AuthModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
