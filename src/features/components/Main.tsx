import { State } from '@features/types/state';
import fetchData from '@shared/api/fetch';
import Card from '@features/components/Card.tsx';
import Spinner from '@shared/ui/Spinner.tsx';
import '@features/components/Main.css';
import { useEffect, useState } from 'react';
import Pagination from '@features/components/Pagination';
import { Outlet, useSearchParams } from 'react-router-dom';

export default function Main() {
  const [searchValue] = useSearchParams();
  const search = searchValue.get('search') || '';
  const [stateList, setStateList] = useState<State>({
    pokemons: [],
    loading: true,
    error: null,
    totalCount: 0,
    page: +(searchValue.get('page') || 1),
  });

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
    <div className="mainContainer">
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
          page={stateList.page}
        />
      </div>
      <Outlet />
    </div>
  );
}
