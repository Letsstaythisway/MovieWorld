import React from 'react'

export const MovieCard = () => {

    const Poster = "https://www.omdbapi.com/src/poster.jpg";
  return (
    <div className='container'>
        <div className="row border rounded text-dark p-2 movie-card-item">
        <div className="col-md"><img src={Poster} alt="" /> </div>
        <div className="col-md">
            <h3>Movie Name</h3>
            <p>imdb rating: 5.5</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-primary'>
                    Drama
                </button>
                <button className='btn btn-danger'>
                    Action
                </button>
                </div>
                <div className='d-grid mt-3'>
                    <button className="btn btn-danger">Action</button>
                </div>
                
            </div>
        </div>
    </div>
  )
}
