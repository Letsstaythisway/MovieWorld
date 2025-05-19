import axios from "axios"
const apiKEY = import.meta.env.VITE_APIKEY
const apiEP = `https://omdbapi.com/?i=tt3896198&apikey=${apiKEY}&`

export const fetchFromAPI = async(str) => {
    try {
        const url = apiEP
        const response = await axios.get()
    } catch (error) {
        console.log(error)
    }
}