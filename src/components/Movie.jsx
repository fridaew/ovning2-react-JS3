import React from 'react'
import { useState } from 'react'

const Movie = ({ movie, imageUrl }) => {

  const [isChange, setIsChange] = useState(false)

  return (
    <div className='card'>
      <div className={`movie ${isChange ? 'change' : ''}`}onClick={() => setIsChange(!isChange)}>
        
        <h3>{movie.title}</h3>
        <img src={imageUrl} />
        <p> Year: {movie.year}</p>
        <p> Directed by: {movie.director}</p>
       
       </div>
    </div>

  )
}

export default Movie