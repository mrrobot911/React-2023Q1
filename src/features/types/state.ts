import { PokeData } from '@features/types/responce';
import { Dispatch, SetStateAction } from 'react';

export interface State {
  pokemons: PokeData[];
  loading: boolean;
  error: Error | null;
  totalCount: number;
  page: number;
}
export interface SearchState {
  search: string;
}
export interface SearchChange extends SearchState {
  changeSearch: Dispatch<SetStateAction<string>>;
}
export interface CardState {
  pokemon: PokeData | null;
  loading: boolean;
  error: Error | null;
}
