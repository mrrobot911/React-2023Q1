import { Search, SearchChange } from '@features/types/state';
import { Component } from 'react';
class Header extends Component<SearchChange, Search> {
  state: Search = {
    searchValue: localStorage.getItem('searchTerm') || '',
  };
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
            this.props.changeSearch(this.state.searchValue);
          }}
        >
          submit
        </button>
      </>
    );
  }
}
export default Header;
