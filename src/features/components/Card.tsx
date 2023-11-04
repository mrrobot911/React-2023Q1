import { data } from '@features/types/responce';
import '@features/components/Card.css';

interface Values {
  props: data;
}
export default function Card({ props }: Values) {
  return (
    <div className="card">
      <img src={props.images.small} alt={props.name} />
      <div className="cardData">
        <h3>{props.name}</h3>
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
        <button type="button">deteil</button>
      </div>
    </div>
  );
}
