import React, {useEffect, useRef, useState} from 'react'
import { MovieCard } from './MovieCard';
import { fetchFromAPI } from '../utils/axios';
import { randomChar } from '../utils/random';

export const  Hero= ({addMovieToList}) => {

    const [searchedMovie, setSearchedMovie] = useState({})
    const [bgImg, setBgImg] = useState("")
    const shouldFetchRef = useRef(true)
    const searchRef = useRef("")
    const [searching, setSearching ] = 
    useState(false);
 
useEffect (() => {
    if (shouldFetchRef.current){
        
fetchMovie(randomChar());
shouldFetchRef.current = false

    }
}, [])


const fetchMovie = async str => {
    const movie = await fetchFromAPI(str);
    setSearchedMovie(movie);
    setBgImg(movie.Poster)
    setSearching(false)
}

const handleOnDelete = () => {
    setSearchedMovie ({});
    setSearching(true);
}


const handleOnMovieSearch = () => {
    const str = searchRef.current.value;
    fetchMovie (str);
    searchRef.current.value = ""
}



    const movieStyle = {
        backgroundImage : `URL(${bgImg})`,
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
                <div className= {searching ? "form-center" : "form-top"}>
                {searching && 
                 
                <div className="text-center">
                    <h1>Search Millions of Movies</h1>
                    <p>Find about the movie more in details before watching them online</p>
                </div>}
            
            
           

            <div className="input-group mb-3 my-5">
                <input ref={searchRef}
                onFocus={() => {setSearching(true)}} type="text" className='form-control' placeholder='Search Movies' aria-label='Search Movies' aria-describedby='button-addon2' />
                <button onClick={handleOnMovieSearch} className='btn btn-danger' type='button' id='button-addon2'>
                  Search
                </button>
            </div>
            </div>


{
    !searching && (<div className="movie-card-display showMovie">
                <MovieCard searchedMovie={searchedMovie} deleteFunc =  {handleOnDelete}
                handleOnAddToTheList = {handleOnAddToTheList}/>
            </div>)
}
            
             </div>
        </div>


    </div>
  )
}