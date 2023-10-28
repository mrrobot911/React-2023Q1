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
        <div>
          <p>{this.props.el.name}</p>
        </div>
      </div>
    );
  }
}
