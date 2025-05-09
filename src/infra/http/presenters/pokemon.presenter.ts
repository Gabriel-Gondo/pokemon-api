import { Pokemon } from '@/domain/pokemon/entities/pokemon';

export class PokemonAbilitiesPresenter {
  static toHTTP(abilities: string[]) {
    return abilities;
  }
}
