import axios from "axios"
const apiKEY = import.meta.env.REACT_APP_APIKEY
const apiEP = `https://www.omdbapi.com/?&apikey=${apiKEY}&`



export const fetchFromAPI = async() => {
    try {
        const response = await axios.get()
    } catch (
        console.log(error)
    ) {
        
    }
}