import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { IPokemonRepository } from '../../domain/pokemon/repositories/pokemon-repository.interface';
import axios from 'axios';
import environmentConfig from '../../core/config/environment.config';

@Injectable()
export class PokemonRepository implements IPokemonRepository {
  constructor(
    @Inject(environmentConfig.KEY)
    private readonly config: ConfigType<typeof environmentConfig>,
  ) {}

  async fetchPokemon(name: string) {
    const response = await axios.get(
      `${this.config.pokeApiBaseUrl}/pokemon/${name.toLowerCase()}`,
    );
    return response.data;
  }
}
