import { Pokemon } from '../entities/pokemon';

export interface IPokemonRepository {
  fetchPokemon(name: string): Promise<Pokemon | null>;
}
