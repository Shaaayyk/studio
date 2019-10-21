import axios from 'axios'
const apiKey = 'e46f2193'

export const getApi = async () => {
  const response = await axios.get('https://ghibliapi.herokuapp.com/films')
  return response.data
}

export const getFilm = async (id) => {
  const response = await
    axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
  return response.data
}

export const getPoster = async (title) => {
  const response = await
    axios.get(`http://omdbapi.com/?apikey=${apiKey}&t=${title}`)
  return response.data.Poster
}