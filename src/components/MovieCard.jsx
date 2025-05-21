import React from 'react'

export const MovieCard = ({searchedMovie, deleteFunc}) => {


    const {Poster, Title, imdbRating, Plot} = searchedMovie
    
  return (
    <div className='container'>
        <div className="row border rounded text-dark p-2 movie-card-item">
        <div className="col-md"><img src={Poster} alt="" /> </div>
        <div className="col-md">
            <h3> {Title}</h3>
            <p>imdb rating: {imdbRating}</p>
            <p>{Plot?.slice(0,50)}...</p>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-primary'>
                    Drama
                </button>
                <button className='btn btn-danger'>
                    Action
                </button>
                </div>
                <div className='d-grid mt-3'>
                    <button onClick={deleteFunc} className="btn btn-danger">Delete</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
