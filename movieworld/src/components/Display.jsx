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
                    <div className='mt-3 text-light'>2 movies found</div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    {
                        new Array(10).fill("".localeCompare((item,i) => 
                         <MovieCard key={i}/>))
                    }
                   
                </div>
            </div>

        </div>
    
    </div>
  )
}
