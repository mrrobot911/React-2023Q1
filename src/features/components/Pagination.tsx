import { State } from '@features/types/state';
import range from '@widgets/helpers/arrayBuild';
import { Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'react-router-dom';

interface props {
  totalCount: number;
  setStateList: Dispatch<SetStateAction<State>>;
  page: number;
}
function Pagination({ totalCount, setStateList, page }: props) {
  const [searchValue, setSearchValue] = useSearchParams();
  const numbers = range(1, Math.ceil(totalCount / 20));

  const changePage = (i: number) => {
    setSearchValue({
      search: searchValue.get('search') || '',
      page: `${i}`,
    });
    setStateList((prev) => ({ ...prev, page: i }));
  };

  const filterList = (i: number) => {
    switch (i) {
      case 1:
      case page - 2:
      case page - 1:
      case page:
      case page + 1:
      case page + 2:
      case numbers.length - 1:
        return true;
      default:
        return false;
    }
  };
  return (
    <div>
      <button
        type="button"
        disabled={page === 1}
        onClick={() => changePage(page - 1)}
      >
        left
      </button>
      {numbers
        .filter((i) => filterList(i))
        .map((i) => (
          <button
            type="button"
            key={i}
            disabled={i === page}
            onClick={() => changePage(i)}
          >
            {i}
          </button>
        ))}
      <button
        type="button"
        disabled={page === numbers.length}
        onClick={() => changePage(page + 1)}
      >
        right
      </button>
    </div>
  );
}

export default Pagination;
