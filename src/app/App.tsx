import '@app/App.tsx';
import Header from '@features/components/Header';
import Main from '@features/components/Main';
import { Component } from 'react';
import ErrorBoundary from 'widgets/helpers/Error';

class App extends Component {
  state = {
    search: localStorage.getItem('searchTerm') || '',
  };
  searchChange = (value: string) => {
    this.setState({ search: value });
  };
  render() {
    return (
      <ErrorBoundary>
        <Header search={this.state.search} changeSearch={this.searchChange} />
        <Main search={this.state.search} />
      </ErrorBoundary>
    );
  }
}

export default App;
