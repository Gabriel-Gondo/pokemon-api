import { Injectable, Inject } from '@nestjs/common';
import { IPokemonRepository } from '../repositories/pokemon-repository.interface';
import { Either, left, right } from '../../../core/either';
import { ResourceNotFoundError } from '../../../core/errors/resource-not-found-error';
import { Pokemon } from '../entities/pokemon';

@Injectable()
export class FetchPokemonAbilitiesUseCase {
  constructor(
    @Inject('IPokemonRepository')
    private readonly pokemonRepository: IPokemonRepository,
  ) {}

  async execute(
    name: string,
  ): Promise<Either<ResourceNotFoundError, string[]>> {
    try {
      const pokemon: Pokemon | null =
        await this.pokemonRepository.fetchPokemon(name);

      if (!pokemon) {
        return left(new ResourceNotFoundError('Pokémon não encontrado'));
      }

      const abilities = pokemon.abilities
        .map((ability) => ability.ability.name)
        .sort((a, b) => a.localeCompare(b));

      return right(abilities);
    } catch (error) {
      return left(new ResourceNotFoundError('Pokémon não encontrado'));
    }
  }
}
