import React from 'react'
import Movie from './Movie'

const MovieList = ({movies}) => {
  return (
    <div className='movieList'>
      {movies.map(movie =>( //loopar igenom och returnerar någonting tillbaka.
      //varje sak i den här arrayen kallas jag för movie. 
      <Movie key ={movie.id} movie={movie} imageUrl={movie.imageUrl}/> //Returnerar en movie/en film
      //knyter ihop varje sak i våran array med ett uta dom här elementen med en key med ett id. Knyter ihop till ett DOM- element.
      //sedan skcikar jag in varje element in i movie komponenten
      ))
      }
    </div>
  )
}

export default MovieList