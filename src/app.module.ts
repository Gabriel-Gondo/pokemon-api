import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PokemonModule } from '@/core/application/pokemon.module';
import environmentConfig from '@/core/config/environment.config';
import { HttpModule } from '@/infra/http/http.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [environmentConfig],
      isGlobal: true,
    }),
    PokemonModule,
    HttpModule,
  ],
})
export class AppModule {}
