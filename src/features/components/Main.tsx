import { SearchState, State } from '@features/types/state';
import { fetchData } from '@shared/api/fetch';
import { Component } from 'react';

class Main extends Component<SearchState, State> {
  APIUrl = `https://api.pokemontcg.io/v2/cards/?pageSize=20${
    this.props.search ? '&q=name:' + this.props.search + '*' : ''
  }`;
  state: State = {
    pokemons: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    fetchData(this.APIUrl)
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
  // componentDidUpdate() {
  //   this.fetchPokemons();
  // }
  render() {
    const { pokemons, loading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    } else if (loading) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          {pokemons.map((el) => (
            <div key={el.id}>
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      );
    }
  }
}
export default Main;
