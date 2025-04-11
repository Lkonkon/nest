import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogosModule } from './jogos/jogos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [JogosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
