import logo from './logo.svg';
import './App.css';
import movies from './MovieList';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import React from 'react';


console.log(movies);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(nouvelleValueQuiVientDeSearchBar) {
    console.log(nouvelleValueQuiVientDeSearchBar);
    this.setState({value: nouvelleValueQuiVientDeSearchBar});
    const foundMovies = movies.filter(function(movie)
    {
        return movie.title.toLowerCase().includes(nouvelleValueQuiVientDeSearchBar);

        /* Equivalent à :
        if(movie.title.includes(search) == true)
        {
            return true;
        }
        else
        {
            return false;
        }
        */
    });

    this.setState({ movies: foundMovies });

    // maj movies
    
  }
  
  render(){
    const value = this.state.value;
    const ListMovies = this.state.movies.map((movies) =>
    <li>
      <MovieCard  title={movies.title}
                  description={movies.description}
                  image={movies.image}/>
    </li>
    );
    
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar value={value} handleMoviesChange={this.handleChange}/>
          {ListMovies}
        </header>
      </div>
    );
  }
}
export default App;
