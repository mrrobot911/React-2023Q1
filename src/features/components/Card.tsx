import { data } from '@features/types/responce';
import { Component } from 'react';
import '@features/components/Card.css';
interface Values {
  key: string;
  el: data;
}
export default class Card extends Component<Values> {
  render() {
    return (
      <div className="card">
        <img src={this.props.el.images.small}></img>
        <div className="cardData">
          <h3>{this.props.el.name}</h3>
          <ul>
            <li>hp: {this.props.el.hp || 'none'}</li>
            <li>rarity: {this.props.el.rarity || 'none'}</li>
            <li>evolves from: {this.props.el.evolvesFrom || 'none'}</li>
          </ul>
        </div>
      </div>
    );
  }
}
