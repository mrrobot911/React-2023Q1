import range from '@widgets/helpers/arrayBuild';

interface props {
  totalCount: number;
}
function Pagination({ totalCount }: props) {
  const numbers = range(0, totalCount / 20);
  return (
    <div>
      {numbers.map((_, i) => (
        <button type="button" key={i + 1}>
          {i}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
