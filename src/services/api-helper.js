import axios from 'axios'

export const getApi = async () => {
  const response = await axios.get('https://ghibliapi.herokuapp.com/films')
  return response.data
}

export const getFilm = async (id) => {
  const response = await
    axios.get(`https://ghibliapi.herokuapp.com/films/${id}`)
  return response.data
}