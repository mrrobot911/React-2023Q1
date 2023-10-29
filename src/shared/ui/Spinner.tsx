import { PureComponent } from 'react';
import '@shared/ui/Spinner.css';

export default class Spinner extends PureComponent {
  array = Array(8).fill(0);
  render() {
    console.log(this.array);
    return (
      <div className="spinnerBlock">
        <div className="spinner">
          {this.array.map((_, i) => (
            <div key={i} className={`sk-cube sk-cube${i + 1}`}></div>
          ))}
        </div>
        <p>Loading...</p>
      </div>
    );
  }
}
