import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { FetchPokemonAbilitiesUseCase } from '@/domain/pokemon/use-cases/fetch-pokemon-abilities.use-case';
import { ResourceNotFoundError } from '../../../core/errors/resource-not-found-error';
import { PokemonAbilitiesPresenter } from '../presenters/pokemon.presenter';

@Controller('pokemon')
export class PokemonController {
  constructor(
    private readonly fetchPokemonUseCase: FetchPokemonAbilitiesUseCase,
  ) {}

  @Get(':name')
  async getPokemon(@Param('name') name: string) {
    const result = await this.fetchPokemonUseCase.execute(name);

    if (result.isLeft()) {
      const error = result.value;
      if (error instanceof ResourceNotFoundError) {
        throw new NotFoundException(error.message);
      }
      throw new NotFoundException('Erro inesperado');
    }

    return PokemonAbilitiesPresenter.toHTTP(result.value);
  }
}
