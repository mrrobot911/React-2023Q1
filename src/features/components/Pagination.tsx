import { State } from '@features/types/state';
import range from '@widgets/helpers/arrayBuild';
import { Dispatch, SetStateAction } from 'react';

interface props {
  totalCount: number;
  setStateList: Dispatch<SetStateAction<State>>;
  page: number;
}
function Pagination({ totalCount, setStateList, page }: props) {
  const numbers = range(0, totalCount / 20);
  return (
    <div>
      <p>{page}</p>
      {numbers.map((_, i) => (
        <button
          type="button"
          key={i}
          onClick={() => setStateList((prev) => ({ ...prev, page: i + 1 }))}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
