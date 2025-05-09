import { IPokemonRepository } from '../../src/domain/pokemon/repositories/pokemon-repository.interface';
import { Pokemon } from '../../src/domain/pokemon/entities/pokemon';

export class InMemoryPokemonRepository implements IPokemonRepository {
  public items: Pokemon[] = [];

  async fetchPokemon(name: string): Promise<Pokemon | null> {
    return this.items.find((item) => item.name === name) || null;
  }
}
