import React from 'react'
import Movie from './Movie'

const MovieList = ({movies}) => {
  return (
    <div className='movieList'>
      {movies.map(movie =>( 
      <Movie key ={movie.id} movie={movie} imageUrl={movie.imageUrl}/> 
      ))
      }
    </div>
  )
}

export default MovieList