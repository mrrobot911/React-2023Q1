import { data } from '@features/types/responce';
export interface State {
  pokemons: data[];
  loading: boolean;
  error: Error | null;
}
export interface SearchState {
  search: string;
}
export interface SearchChange extends SearchState {
  changeSearch: (value: string) => void;
}
