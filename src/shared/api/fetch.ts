import { FetchData } from '@features/types/responce.ts';
import { CardState, State } from '@features/types/state.ts';
import { Dispatch, SetStateAction } from 'react';

const APIUrl = 'https://api.pokemontcg.io/v2/cards/?pageSize=20';
const fetchData = async (
  search: string,
  setStateList: Dispatch<SetStateAction<State>>,
  page: number
) => {
  setStateList((pre) => ({ ...pre, loading: true }));
  try {
    const response = await fetch(
      `${APIUrl}${page !== 1 ? `&page=${page}` : ''}
      ${search ? `&q=name:${search}*` : ''}`
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

export const fetchId = async (
  id: string,
  setCard: Dispatch<SetStateAction<CardState>>
) => {
  setCard((pre) => ({ ...pre, loading: true }));
  try {
    const response = await fetch(`${APIUrl}${id ? `&q=id:${id}` : ''}`);
    const card = await response.json();
    setCard((pre) => ({ ...pre, pokemon: card.data[0], loading: false }));
  } catch (err: unknown) {
    if (err instanceof Error) {
      setCard((pre) => ({ ...pre, error: err as Error, loading: false }));
    }
  }
};
