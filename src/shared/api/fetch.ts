import { FetchData } from '@features/types/responce.ts';
import { State } from '@features/types/state.ts';
import { Dispatch, SetStateAction } from 'react';

const APIUrl = 'https://api.pokemontcg.io/v2/cards/?pageSize=20';
const fetchData = async (
  search: string,
  setStateList: Dispatch<SetStateAction<State>>
) => {
  setStateList((pre) => ({ ...pre, loading: true }));
  try {
    const response = await fetch(
      `${APIUrl}${search ? `&q=name:${search}*` : ''}`
    );
    const data: FetchData = await response.json();
    setStateList((pre) => ({
      ...pre,
      pokemons: data.data,
      loading: false,
      totalCount: data.totalCount,
    }));
  } catch (err: unknown) {
    if (err instanceof Error) {
      setStateList((pre) => ({ ...pre, error: err as Error, loading: false }));
    }
  }
};
export default fetchData;
