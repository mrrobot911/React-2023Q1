import '@features/components/Header.css';
import { ChangeEvent, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Header() {
  const [searchValue, setSearchValue] = useSearchParams();
  const inputString = searchValue.get('search') || '';
  const [inputValue, setInputValue] = useState(inputString || '');

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitInput = () => {
    setSearchValue({ search: inputValue, page: '1' });
    localStorage.setItem('searchTerm', inputString || '');
  };

  return (
    <div className="header">
      <h1>Pokemons Database</h1>
      <input
        type="search"
        value={inputValue}
        placeholder="find your pokemon"
        onChange={(e) => changeInput(e)}
      />
      <button type="button" onClick={() => submitInput()}>
        search
      </button>
    </div>
  );
}
