import { registerAs } from '@nestjs/config';

export default registerAs('environment', () => ({
  pokeApiBaseUrl: process.env.POKE_API_BASE_URL || 'https://pokeapi.co/api/v2',
}));
