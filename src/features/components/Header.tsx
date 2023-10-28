import { Search, SearchChange } from '@features/types/state';
import { Component, createRef } from 'react';
class Header extends Component<SearchChange, Search> {
  inputRef = createRef<HTMLInputElement>();

  render() {
    return (
      <>
        <input
          type="search"
          ref={this.inputRef}
          placeholder={'find your pokemon'}
          onChange={(e) => e.target.value}
        />
        <button
          onClick={() => {
            localStorage.setItem(
              'searchTerm',
              this.inputRef.current?.value || ''
            );
            this.props.changeSearch(this.inputRef.current?.value || '');
          }}
        >
          submit
        </button>
      </>
    );
  }
}
export default Header;
