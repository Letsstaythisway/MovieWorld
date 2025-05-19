import React from 'react'

export const  Hero= () => {
    const movieStyle = {
        backgroundImage : `URL("https://plus.unsplash.com/premium_photo-1728499754017-d4ad4bf54c32?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8")`,
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
        <div className="hero" style={movieStyle}>
            <div className="form-center">
                <div className="text-center">
                    <h1>Search Millions of Movies</h1>
                    <p>Find about the movie more in details before watching them online</p>
                </div>
            </div>

            <div className="input-group my-5">
                <input type="text" className='form-control' placeholder='Search Movies' aria-label='Search Movies' aria-describedby='button-addon2' />
                <button className='btn btn-outline-secondary' type='button' id='button-addon2'>
                    Button
                </button>
            </div>
        </div>


    </div>
  )
};
