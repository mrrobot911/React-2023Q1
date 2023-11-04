import { State } from '@features/types/state';
import range from '@widgets/helpers/arrayBuild';
import { Dispatch, SetStateAction } from 'react';
import { useSearchParams } from 'react-router-dom';

interface props {
  totalCount: number;
  setStateList: Dispatch<SetStateAction<State>>;
}
function Pagination({ totalCount, setStateList }: props) {
  const [searchValue, setSearchValue] = useSearchParams();
  const page = searchValue.get('page');
  const numbers = range(0, totalCount / 20);

  const changePage = (i: number) => {
    setSearchValue({
      search: searchValue.get('search') || '',
      page: `${i + 1}`,
    });
    setStateList((prev) => ({ ...prev, page: i + 1 }));
  };

  return (
    <div>
      <p>{page}</p>
      {numbers.map((_, i) => (
        <button type="button" key={i} onClick={() => changePage(i)}>
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
