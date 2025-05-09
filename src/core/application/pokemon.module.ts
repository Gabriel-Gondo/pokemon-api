import { Module } from '@nestjs/common';
import { FetchPokemonAbilitiesUseCase } from '@/domain/pokemon/use-cases/fetch-pokemon-abilities.use-case';
import { PokemonRepository } from '@/infra/repositories/pokemon.repository';

@Module({
  providers: [
    FetchPokemonAbilitiesUseCase,
    {
      provide: 'IPokemonRepository',
      useClass: PokemonRepository,
    },
  ],
  exports: [FetchPokemonAbilitiesUseCase],
})
export class PokemonModule {}
