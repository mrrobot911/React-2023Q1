import { State } from '@features/types/state';
import fetchData from '@shared/api/fetch';
import Card from '@features/components/Card.tsx';
import Spinner from '@shared/ui/Spinner.tsx';
import '@features/components/Main.css';
import { useEffect, useRef, useState } from 'react';
import Pagination from '@features/components/Pagination';
import { Outlet, useSearchParams } from 'react-router-dom';

export default function Main() {
  const [searchValue] = useSearchParams();
  const search = searchValue.get('search') || '';
  const page = +(searchValue.get('page') || 1);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [stateList, setStateList] = useState<State>({
    pokemons: [],
    loading: true,
    error: null,
    totalCount: 0,
    page,
  });
  const [cardsInPage, setCardsInPage] = useState(20);

  useEffect(() => {
    setStateList((pre) => ({ ...pre, page }));
  }, [page]);

  useEffect(() => {
    fetchData(search, setStateList, stateList.page, cardsInPage);
  }, [search, stateList.page, cardsInPage]);

  const inputSubmit = () => {
    if (inputRef.current && !Number.isNaN(+inputRef.current.value)) {
      setCardsInPage(+inputRef.current.value);
    }
  };
  if (stateList.error) {
    return <p>{stateList.error.message}</p>;
  }
  if (stateList.loading) {
    return <Spinner />;
  }
  return (
    <div className="mainContainer">
      <div
        className={
          searchValue.get('detail')
            ? 'container'
            : 'container containerFullScrean'
        }
      >
        <div className="cardList">
          {stateList.pokemons.length > 0 ? (
            stateList.pokemons.map((el) => <Card key={el.id} pokemon={el} />)
          ) : (
            <p>No search results</p>
          )}
        </div>
        <div className="navigationContainer">
          <Pagination
            totalCount={stateList.totalCount}
            setStateList={setStateList}
            page={stateList.page}
            cardsInPage={cardsInPage}
          />
          <label htmlFor="itemsInPage">
            <input className="itemsInPage" ref={inputRef} />
          </label>
          <button type="button" onClick={inputSubmit}>
            Change
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
