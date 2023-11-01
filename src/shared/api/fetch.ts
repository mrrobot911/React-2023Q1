import { FetchData } from '@features/types/responce';
import { State } from '@features/types/state';
import { Dispatch, SetStateAction } from 'react';

const APIUrl = `https://api.pokemontcg.io/v2/cards/?pageSize=20`;
export const fetchData = async (
  search: string,
  setStateList: Dispatch<SetStateAction<State>>
) => {
  setStateList((pre) => ({ ...pre, loading: true }));
  try {
    const response = await fetch(
      APIUrl + `${search ? '&q=name:' + search + '*' : ''}`
    );
    const data: FetchData = await response.json();
    setStateList((pre) => ({ ...pre, pokemons: data.data, loading: false }));
  } catch (error: Error) {
    setStateList((pre) => ({ ...pre, error, loading: false }));
  }
};
