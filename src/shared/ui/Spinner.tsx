import '@shared/ui/Spinner.css';
import range from '@widgets/helpers/arrayBuild';

export default function Spinner() {
  const array = range(0, 8);

  return (
    <div className="spinnerBlock">
      <div className="spinner">
        {array.map((_, i) => (
          <div key={i} className={`sk-cube sk-cube${i + 1}`} />
        ))}
      </div>
      <p>Loading...</p>
    </div>
  );
}
