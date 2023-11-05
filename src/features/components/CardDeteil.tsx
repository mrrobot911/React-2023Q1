import '@features/components/CardDeteil.css';
import { CardState } from '@features/types/state';
import { fetchId } from '@shared/api/fetch';
import Spinner from '@shared/ui/Spinner';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function CardDeteil() {
  const [searchValue, setSearchValue] = useSearchParams();
  const deteil = searchValue.get('detail') || '';
  const [Card, setCard] = useState<CardState>({
    pokemon: null,
    loading: false,
    error: null,
  });

  const deteilsFunc = (id: string) => {
    const prevId = searchValue.get('detail');
    setSearchValue({
      search: searchValue.get('search') || '',
      page: searchValue.get('page') || '',
      detail: prevId === id ? '' : id,
    });
  };

  useEffect(() => {
    fetchId(deteil, setCard);
  }, [deteil]);

  if (Card.error) {
    return <p>{Card.error.message}</p>;
  }

  if (Card.loading) {
    return (
      <div className={deteil ? 'deteilContainer' : 'noDeteilContainer'}>
        <Spinner />
      </div>
    );
  }

  return (
    <div className={deteil ? 'deteilContainer' : 'noDeteilContainer'}>
      <img src={Card.pokemon?.images?.large} alt={Card.pokemon?.name} />
      <div className="deteilString">
        <h2>
          Name:
          {Card.pokemon?.name || 'none'}
        </h2>
        <p>
          National pokemon name:
          {Card.pokemon?.nationalPokedexNumbers || 'none'}
        </p>
        <p>
          Rarity:
          {Card.pokemon?.rarity || 'none'}
        </p>
        <p>
          SuperType:
          {Card.pokemon?.supertype || 'none'}
        </p>
      </div>
      <button
        type="button"
        className="closeCard"
        onClick={() => deteilsFunc(deteil)}
      >
        X
      </button>
    </div>
  );
}

export default CardDeteil;
