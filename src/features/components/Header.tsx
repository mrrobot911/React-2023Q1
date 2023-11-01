import '@features/components/Header.css';
import { Dispatch, SetStateAction, useRef, useState } from 'react';

interface props {
  search: string;
  changeSearch: Dispatch<SetStateAction<string>>;
}
export default function Header({ search, changeSearch }: props) {
  const [inputValue, setInputValue] = useState(search);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="header">
      <h1>Pokemons Database</h1>
      <input
        type="search"
        ref={inputRef}
        value={inputValue}
        placeholder="find your pokemon"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          localStorage.setItem('searchTerm', inputRef.current?.value || '');
          changeSearch(inputValue);
        }}
      >
        search
      </button>
    </div>
  );
}
