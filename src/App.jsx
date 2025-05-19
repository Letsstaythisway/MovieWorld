import { Hero } from "./components/Hero"
import { Display } from "./components/Display"
import { MovieCard } from "./components/MovieCard"

function App () {
  return (
   <div className="wrapper"> 
   {/*hero Section */}
   <Hero/>
   {/*display section Section */}
   <Display/>

    </div>
   
  )
}


export default App
