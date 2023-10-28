import { PureComponent } from 'react';
import '@shared/ui/Spinner.css';

export default class Spinner extends PureComponent {
  render() {
    return (
      <div className="spinnerBlock">
        <div className="spinner">
          <div className="sk-cube sk-cube1"></div>
          <div className="sk-cube sk-cube2"></div>
          <div className="sk-cube sk-cube3"></div>
          <div className="sk-cube sk-cube4"></div>
          <div className="sk-cube sk-cube5"></div>
          <div className="sk-cube sk-cube6"></div>
          <div className="sk-cube sk-cube7"></div>
          <div className="sk-cube sk-cube8"></div>
          <div className="sk-cube sk-cube9"></div>
        </div>
        <p>Loading...</p>
      </div>
    );
  }
}
