import { data } from '@features/types/responce';
export interface State {
  pokemons: data[] | [];
  loading: boolean;
  error: Error | null;
}
