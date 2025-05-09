import { Entity } from '@/core/entities/entity';

interface Ability {
  ability: { name: string };
}
export interface PokemonProps {
  name: string;
  abilities: Ability[];
}

export class Pokemon extends Entity<PokemonProps> {
  get name() {
    return this.props.name;
  }

  get abilities() {
    return this.props.abilities;
  }

  static create(props: PokemonProps) {
    return new Pokemon(props);
  }
}
