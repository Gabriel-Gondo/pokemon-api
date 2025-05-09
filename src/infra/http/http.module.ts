import { Module } from '@nestjs/common';
import { PokemonController } from './controllers/pokemon.controller';
import { PokemonModule } from '@/core/application/pokemon.module';

@Module({
  imports: [PokemonModule],
  controllers: [PokemonController],
  providers: [],
})
export class HttpModule {}
