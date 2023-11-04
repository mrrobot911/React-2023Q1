import { data } from '@features/types/responce';
import { Dispatch, SetStateAction } from 'react';

export interface State {
  pokemons: data[];
  loading: boolean;
  error: Error | null;
  totalCount: number;
}
export interface SearchState {
  search: string;
}
export interface SearchChange extends SearchState {
  changeSearch: Dispatch<SetStateAction<string>>;
}
