import { pokeData } from '@features/types/responce';
import { Dispatch, SetStateAction } from 'react';

export interface State {
  pokemons: pokeData[];
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
  pokemon: pokeData | null;
  loading: boolean;
  error: Error | null;
}
