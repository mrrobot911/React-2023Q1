import { SearchState, State } from '@features/types/state';
import fetchData from '@shared/api/fetch';
import Card from '@features/components/Card.tsx';
import Spinner from '@shared/ui/Spinner.tsx';
import '@features/components/Main.css';
import { useEffect, useState } from 'react';

export default function Main({ search }: SearchState) {
  const [stateList, setStateList] = useState<State>({
    pokemons: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetchData(search, setStateList);
  }, [search]);

  if (stateList.error) {
    return <p>{stateList.error.message}</p>;
  }
  if (stateList.loading) {
    return <Spinner />;
  }
  return (
    <div className="container">
      <div className="cardList">
        {stateList.pokemons.length > 0 ? (
          stateList.pokemons.map((el) => <Card key={el.id} props={el} />)
        ) : (
          <p>No search results</p>
        )}
      </div>
    </div>
  );
}
