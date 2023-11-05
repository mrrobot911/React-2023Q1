import { data } from '@features/types/responce';
import '@features/components/Card.css';
import { Link } from 'react-router-dom';

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
        <Link to={`/${props.id}`}>deteil</Link>
      </div>
    </div>
  );
}
