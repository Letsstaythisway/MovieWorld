import React from 'react'
import { MovieCard } from './MovieCard'

export const Display = ({movieList}) => {
    console.log(movieList);
    <div className='container mt-5 rounded'>
        <div className="bg-dark">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role='group' aria-label='Basic Example'>
                        <div type="button" className="btn btn-primary">ALL</div>
                        <div type="button" className="btn btn-danger">DRAMA</div>
                        <div type="button" className="btn btn-info">ACTION</div>
                    </div>
                    <div className='mt-3 text-light'>2 movies listed</div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col d-flex justify-content-around gap-2 flex-wrap">
                    {movieList.map((item, i) => (
                <div className=""  key={i}>
                     <MovieCard searchedMovie={item}/>
                     </div>
                     ))}
                       
                   

                </div>
            </div>
        </div>
    </div>
                   
                    }