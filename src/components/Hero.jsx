import React from 'react'
import { MovieCard } from './MovieCard';

export const  Hero= () => {
    const movieStyle = {
        backgroundImage : `URL("https://www.omdbapi.com/src/poster.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "60vh",

    }




  return (
    <div>
        <nav className=' py-3 text-danger fixed-top'>
            <h2 className='container'>MovieWorld

            </h2>
        </nav>
        <div className="hero d-flex justify-content-center align-items-center text-white
        " style={movieStyle}>
            <div className='hero-content'>
            <div className="form-center">
                <div className="text-center">
                    <h1>Search Millions of Movies</h1>
                    <p>Find about the movie more in details before watching them online</p>
                </div>
            </div>
           

            <div className="input-group mb-3 my-5">
                <input type="text" className='form-control' placeholder='Search Movies' aria-label='Search Movies' aria-describedby='button-addon2' />
                <button className='btn btn-danger' type='button' id='button-addon2'>
                    Button
                </button>
            </div>

            <div className="movie-card-display">
                <MovieCard/>
            </div>
             </div>
        </div>


    </div>
  )
};
