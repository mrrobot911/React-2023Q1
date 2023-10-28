import '@app/App.tsx';
import Header from '@features/components/Header';
import Main from '@features/components/Main';
import { Component } from 'react';

class App extends Component {
  state = {
    search: localStorage.getItem('searchTerm') || '',
  };
  searchChange = (value: string) => {
    this.setState({ search: value });
  };
  render() {
    return (
      <>
        <Header search={this.state.search} changeSearch={this.searchChange} />
        <Main search={this.state.search} />
      </>
    );
  }
}

export default App;
