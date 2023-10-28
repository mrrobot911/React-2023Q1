import { Search, SearchChange } from '@features/types/state';
import { Component, createRef } from 'react';
import '@features/components/Header.css';
class Header extends Component<SearchChange, Search> {
  state: Search = {
    searchValue: localStorage.getItem('searchTerm') || '',
  };
  inputRef = createRef<HTMLInputElement>();
  componentDidMount(): void {
    this.inputRef.current?.focus();
  }
  render() {
    return (
      <div className="header">
        <input
          type="search"
          ref={this.inputRef}
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
      </div>
    );
  }
}
export default Header;
