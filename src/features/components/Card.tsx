import { PokeData } from '@features/types/responce';
import '@features/components/Card.css';
import { useSearchParams } from 'react-router-dom';

export default function Card({ pokemon }: { pokemon: PokeData }) {
  const [searchValue, setInputValue] = useSearchParams();
  const deteilsFunc = (id: string) => {
    const prevId = searchValue.get('detail');
    setInputValue({
      search: searchValue.get('search') || '',
      page: searchValue.get('page') || '',
      detail: prevId === id ? '' : id,
    });
  };
  return (
    <div className="card">
      <img src={pokemon.images.small} alt={pokemon.name} />
      <div className="cardData">
        <h3>{pokemon.name}</h3>
        <div className="cardDeteil">
          <ul>
            <li>
              hp:
              {pokemon.hp || 'none'}
            </li>
            <li>
              rarity:
              {pokemon.rarity || 'none'}
            </li>
            <li>
              evolves from:
              {pokemon.evolvesFrom || 'none'}
            </li>
          </ul>
          <button type="button" onClick={() => deteilsFunc(pokemon.id)}>
            deteil
          </button>
        </div>
      </div>
    </div>
  );
}
