import { State } from '@features/types/state';
import { fetchData } from '@shared/api/fetch';
import { Component } from 'react';

let prevProps = localStorage.getItem('searchTerm') || null;
const APIUrl = `https://api.pokemontcg.io/v2/cards/?pageSize=20&${
  prevProps ? 'q=name:' + prevProps + '*' : ''
}`;
class Main extends Component {
  state: State = {
    pokemons: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    fetchData(APIUrl)
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
  componentDidUpdate() {
    if (prevProps !== localStorage.getItem('searchTerm')) {
      prevProps = localStorage.getItem('searchTerm');
      this.fetchPokemons();
    }
  }
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
