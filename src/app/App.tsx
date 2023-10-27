import '@app/App.tsx';
import Header from '@features/components/Header';
import Main from '@features/components/Main';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    );
  }
}

export default App;
