import React from 'react'
import { MovieCard } from './MovieCard'

export const Hero = () => {

    const movieStyle = {
        backgroundImage: `URL(https://www.omdbapi.com/src/poster.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "50vh"
    }
  return (
    <div>
        <nav className='bg-dark py-3 text-danger'  >

        <h2>MovieWorld
            </h2>
            </nav>
            <div className="hero d-flex
             justify-content-center 
             align-items-center
             text-white" style={movieStyle}>


                <div className='hero-content'>
                <div className="form-center ">
                    <div className="text-center">
                        <h1>Search Movies all you want</h1>
                        <p>Find more about this movies before watching them</p>
                    </div>

                </div>

                <div className="input-group my-5">
                   <input type="text" className="form-control" placeholder='Find The Movies You Love' aria-label='Username' aria-describedby='button-addon2'/>
                   <button className='btn btn-danger' type='button' id='button-addon2'>
                    Search
                   </button>

                </div>
                <div className="movie-card-display">
                    <MovieCard/>
                </div>
                </div>
            </div>
        </div>
  )
}
