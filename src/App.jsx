import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import MovieList from './components/MovieList';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

const heroClick = (name) => { // skapar en funktion som skriver i consolen när jag klickar på knappen
  console.log(name + ' klickade på knappen');
}

const App = () => {

  const [movies, setMovies]= useState([ //movies = variabel
    {
      id:uuidv4(),
      title: 'Shutter Island',
      director:'Martin Scorsese',
      year: 2010,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
      id:uuidv4(),
      title: 'Pulp Fiction',
      director: 'Quentin Tarantino',
      year: 1994,
      imageUrl: 'https://i-viaplay-com.akamaized.net/viaplay-prod/771/672/1473257890-66ec43721fe0fd0073af100473a09da74924816c.jpg?width=400&height=600'
    },
    {
      id:uuidv4(),
      title: 'Grease',
      director: 'Randal Kleiser',
      year: 1978,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BZmUyMDEyOTgtZmUwOS00NTdkLThlNzctNTM1ODQ4M2VhMjdhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg'
    },
    {
      id:uuidv4(),
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      year: 1997,
      imageUrl: 'https://www.deccanherald.com/sites/dh/files/articleimages/2022/03/19/file7k6ctouvrywdnjv372i-1092645-1647659262.jpg'
     },

  
  ]);


  return (
    <>
      <Navbar />
      
      <div className="hero-text">
        <h1>Hey! <br></br>This is a list of my favorite movies</h1>
        <button className='btn' onClick={() => heroClick('Frida')}>Click here</button>
        {/* <button className='btn' onClick={heroClick}>Click here</button> */}
        {/* <button className = 'btn 'onClick={()=> console.log('Du klickade på knappen')}>Click here</button> */}
      </div>

      {/* skickar med ett props till list-komponenten */}
      <MovieList movies={movies}/> 

      <Footer />
    </>

  )
}

export default App