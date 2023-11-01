import '@app/App.tsx';
import Header from '@features/components/Header';
import Main from '@features/components/Main';
import ErrorBoundary from '@widgets/helpers/Error';
import { useState } from 'react';

export default function App() {
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
