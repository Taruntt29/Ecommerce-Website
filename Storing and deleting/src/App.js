import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from "./components/MoviesList";
import "./App.css";
import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setISLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchMoviesHandler = useCallback(async function () {
    setISLoading(true);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");
      const response = await fetch('https://moviesapp-6bea5-default-rtdb.firebaseio.com/movies.json');
      if (!response.ok) {
        throw new Error("Retrying...");
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      const laodedMovies = [];

      for(const key in data){
        laodedMovies.push({
          id:key,
          title:data[key].title,
          openingText:data[key].openingText,
          releaseDate:data[key].releaseDate
        })
      }


      const transformedMovies = data.results.map((moviesData) => {
        return {
          id: moviesData.episode_id,
          title: moviesData.title,
          openingText: moviesData.opening_crawl,
          releaseDate: moviesData.release_date,
        };
      });
      setMovies(transformedMovies);
      setISLoading(false);
      setMovies(laodedMovies);
    } catch (error) {
      setError(error.message);
    }
    setISLoading(false);
  }, [])
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch('https://moviesapp-6bea5-default-rtdb.firebaseio.com/movies.json',{
      method:'POST',
      body:JSON.stringify(movie)

    });

  useEffect(()=>{fetchMoviesHandler()},[fetchMoviesHandler])
    const data = await response.json()
    console.log(data);

  }

  async function deleteAMovie(id){

    const deleteUrl = `https://moviesapp-6bea5-default-rtdb.firebaseio.com/movies/${id}.json`

    const response = await fetch(deleteUrl,{
      method:'DELETE'});


  };

  let content = <p>Found no movies</p>;
  const deleteMovieHandler = (movieObj)=>{
    const filteredMovies = [...movies]
    console.log(filteredMovies)
    for(let movie in filteredMovies){
      if(filteredMovies[movie].title===movieObj.title){
        deleteAMovie(filteredMovies[movie].id)
        filteredMovies.splice(movie,1)


      }
    }
    setMovies(filteredMovies)






  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
    content = <MoviesList movies={movies} deleteMovie={deleteMovieHandler} />;
  }

  if (error) {
    content = <p>Something Went Wrong...</p>

    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }


  return (
    <React.Fragment>
      <MovieForm/>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}
export default App;