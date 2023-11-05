import '@features/components/CardDeteil.css';
import { CardState } from '@features/types/state';
import { fetchId } from '@shared/api/fetch';
import Spinner from '@shared/ui/Spinner';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function CardDeteil() {
  const [searchValue] = useSearchParams();
  const deteil = searchValue.get('detail') || '';
  const [Card, setCard] = useState<CardState>({
    pokemon: null,
    loading: false,
    error: null,
  });

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
      <h2>
        Name:
        {Card.pokemon?.name}
      </h2>
      <p>
        National pokemon name:
        {Card.pokemon?.nationalPokedexNumbers}
      </p>
      <ul>
        Pokemon attack:
        {Card.pokemon?.attacks.map((el) => (
          <li>
            <span>{el.name}</span>
            <span>{el.damage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardDeteil;
