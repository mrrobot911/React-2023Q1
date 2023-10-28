import { SearchState, State } from '@features/types/state';
import { fetchData } from '@shared/api/fetch';
import { Component } from 'react';
import Card from './Card';
import '@features/components/Main.css';

class Main extends Component<SearchState, State> {
  APIUrl = `https://api.pokemontcg.io/v2/cards/?pageSize=20`;

  state: State = {
    pokemons: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchPokemons();
  }
  componentDidUpdate(prevProps: Readonly<SearchState>): void {
    if (prevProps.search !== this.props.search) {
      this.fetchPokemons();
    }
  }
  fetchPokemons() {
    this.setState({ loading: true });
    fetchData(
      this.APIUrl +
        `${this.props.search ? '&q=name:' + this.props.search + '*' : ''}`
    )
      .then((responseData) => {
        this.setState({
          pokemons: responseData.data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          loading: false,
        });
      });
  }
  render() {
    const { pokemons, loading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    } else if (loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div className="cardList">
          {pokemons.length > 0 ? (
            pokemons.map((el) => <Card key={el.id} el={el} />)
          ) : (
            <p>No search results</p>
          )}
        </div>
      );
    }
  }
}
export default Main;
