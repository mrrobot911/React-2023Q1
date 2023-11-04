import { State } from '@features/types/state';
import fetchData from '@shared/api/fetch';
import Card from '@features/components/Card.tsx';
import Spinner from '@shared/ui/Spinner.tsx';
import '@features/components/Main.css';
import { useEffect, useState } from 'react';
import Pagination from '@features/components/Pagination';
import { useSearchParams } from 'react-router-dom';

export default function Main() {
  const [stateList, setStateList] = useState<State>({
    pokemons: [],
    loading: true,
    error: null,
    totalCount: 0,
    page: 1,
  });

  const [searchValue] = useSearchParams();
  const search = searchValue.get('search') || '';

  useEffect(() => {
    fetchData(search, setStateList, stateList.page);
  }, [search, stateList.page]);

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
      <Pagination
        totalCount={stateList.totalCount}
        setStateList={setStateList}
      />
    </div>
  );
}
