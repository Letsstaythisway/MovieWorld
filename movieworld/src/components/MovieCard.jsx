import React from 'react'

export const MovieCard = () => {

    const Poster = "https://www.omdbapi.com/src/poster.jpg"
  return (
    <div className='container d-flex'>
        <div className="row border rounded text-dark p-3 movie-card-item">
        <div className="cod-md">
            <img src={Poster} alt="" />
        </div>
       
        <div className="cod-md">
            <h3>Movie Name</h3>
            <p>IMDB Rating: 5.5</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-warning'>Drama</button>
                <button className='btn btn-info'>Action</button>
                </div>

                <div className="d-grid">
                     <button className='btn btn-danger mt-3'>Delete</button>
                </div>
                 </div>
        </div>
    </div>
  )
}
