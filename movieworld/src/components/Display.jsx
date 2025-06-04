import React from 'react'
import { MovieCard } from './MovieCard'

export const Display = () => {
  return (
    <div className='container mt-5 rounded'>
        <div className="bg-dark">
            <div className="row">
                <div className="col">
                    <div className='btn-group' role='group'>
                    <button type="button" className='btn btn-primary'>All</button>
                    <button type="button" className='btn btn-info'>Action</button>
                    <button type="button" className='btn btn-warning'>Drama</button>
                    </div>
                    <div className='mt-3 text-light m-4'>2 movies found</div>
                </div>
            </div>
            <div className="row mt-5 ">
                <div className="col gap-2 d-flex flex-wrap justify-content-around">
                    {
                        new Array(10).fill("").map((item,i) =>  (
                         <div className="m-3" key={i}>
                            <MovieCard/> 
                         </div> ))
                         
                    }
                   
                </div>
            </div>

        </div>
    
    </div>
  )
}
