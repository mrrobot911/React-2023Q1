import Header from '@widgets/components/Header';
import Main from '@features/components/Main.tsx';
import ErrorBoundary from '@widgets/helpers/Error.tsx';
import { ReactElement } from 'react';

export default function App(): ReactElement {
  return (
    <ErrorBoundary>
      <Header />
      <Main />
    </ErrorBoundary>
  );
}
