import Header from '@features/components/Header.tsx';
import Main from '@features/components/Main.tsx';
import ErrorBoundary from '@widgets/helpers/Error.tsx';
import { ReactElement, useState } from 'react';

export default function App(): ReactElement {
  const [search, setSearch] = useState(
    localStorage.getItem('searchTerm') || ''
  );
  return (
    <ErrorBoundary>
      <Header search={search} changeSearch={setSearch} />
      <Main search={search} />
    </ErrorBoundary>
  );
}
