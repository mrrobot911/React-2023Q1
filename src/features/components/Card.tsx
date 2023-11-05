import { data } from '@features/types/responce';
import '@features/components/Card.css';
import { useSearchParams } from 'react-router-dom';

interface Values {
  props: data;
}
export default function Card({ props }: Values) {
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
      <img src={props.images.small} alt={props.name} />
      <div className="cardData">
        <h3>{props.name}</h3>
        <div className="cardDeteil">
          <ul>
            <li>
              hp:
              {props.hp || 'none'}
            </li>
            <li>
              rarity:
              {props.rarity || 'none'}
            </li>
            <li>
              evolves from:
              {props.evolvesFrom || 'none'}
            </li>
          </ul>
          <button type="button" onClick={() => deteilsFunc(props.id)}>
            deteil
          </button>
        </div>
      </div>
    </div>
  );
}
