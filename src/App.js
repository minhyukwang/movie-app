import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    console.log(movies);

    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate() {
    console.log("Update state");
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {" "}
        {isLoading
          ? "Loading..."
          : movies.map((movie) => {
              return (
                <Movie
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.title}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
