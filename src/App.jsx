import { Hero } from "./components/Hero"
import { Display } from "./components/Display"
import { MovieCard } from "./components/MovieCard"
import { useState } from "react"

function App () {
  const [movieList, setMovieList] = useState([])

  const addMovieToList = movie => {
    setMovieList([
      ...movieList, movie
    ])
  }
  return (
   <div className="wrapper"> 
   {/*hero Section */}
   <Hero addMovieToList={addMovieToList}/>
   {/*display section Section */}
   <Display movieList={movieList}/>

    </div>
   
  )
}


export default App
