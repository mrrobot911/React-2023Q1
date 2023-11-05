import '@features/components/CardDeteil.css';
import { useSearchParams } from 'react-router-dom';

function CardDeteil() {
  const [searchValue] = useSearchParams();
  const deteil = searchValue.get('detail');
  return (
    <div className={deteil ? 'deteilContainer' : 'noDeteilContainer'}>
      {deteil}
    </div>
  );
}

export default CardDeteil;
