import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
@@ -23,10 +24,14 @@ class App extends React.Component {
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading
          ? "Loading..."
          : movies.map(movie => (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader__text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
@@ -36,7 +41,9 @@ class App extends React.Component {
                poster={movie.medium_cover_image}
              />
            ))}
      </div>
          </div>
        )}
      </section>
    );
  }
}