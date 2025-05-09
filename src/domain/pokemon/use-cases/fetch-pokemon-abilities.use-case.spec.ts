import { describe, it, expect, beforeEach } from 'vitest';
import { faker } from '@faker-js/faker';
import { FetchPokemonAbilitiesUseCase } from './fetch-pokemon-abilities.use-case';
import { InMemoryPokemonRepository } from '../../../../test/repositories/in-memory-pokemon-repository';
import { ResourceNotFoundError } from '@/core/errors/resource-not-found-error';
import { Pokemon } from '../entities/pokemon';

describe('FetchPokemonAbilitiesUseCase', () => {
  let inMemoryPokemonRepository: InMemoryPokemonRepository;
  let sut: FetchPokemonAbilitiesUseCase;

  beforeEach(() => {
    inMemoryPokemonRepository = new InMemoryPokemonRepository();
    sut = new FetchPokemonAbilitiesUseCase(inMemoryPokemonRepository);
  });

  it('should fetch pokemon and return sorted abilities', async () => {
    const pokemonName = faker.animal.type().toLowerCase();
    const abilityNames = [
      faker.word.adjective(),
      faker.word.adjective(),
    ].sort();

    inMemoryPokemonRepository.items = [
      Pokemon.create({
        name: pokemonName,
        abilities: [
          { ability: { name: abilityNames[1] } },
          { ability: { name: abilityNames[0] } },
        ],
      }),
    ];

    const result = await sut.execute(pokemonName);

    expect(result.isRight()).toBe(true);
    expect(result.value).toEqual(abilityNames);
  });

  it('should return ResourceNotFoundError if pokemon does not exist', async () => {
    const nonExistentPokemon = faker.person.fullName().toLowerCase();

    inMemoryPokemonRepository.items = [];

    const result = await sut.execute(nonExistentPokemon);

    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(ResourceNotFoundError);
  });
});
