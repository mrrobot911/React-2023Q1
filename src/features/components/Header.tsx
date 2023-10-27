import { Component } from 'react';

class Header extends Component {
  state = {
    searchValue: '',
  };
  componentDidMount() {
    if (localStorage.getItem('searchTerm')) {
      this.setState({ searchValue: localStorage.getItem('searchTerm') });
    }
  }
  componentWillUnmount() {
    localStorage.removeItem('searchTerm');
  }
  render() {
    return (
      <>
        <input
          type="search"
          value={this.state.searchValue}
          placeholder={'find your pokemon'}
          onChange={(e) => this.setState({ searchValue: e.target.value })}
        />
        <button
          onClick={() => {
            localStorage.setItem('searchTerm', this.state.searchValue);
            this.setState({ searchValue: '' });
          }}
        >
          submit
        </button>
      </>
    );
  }
}
export default Header;
