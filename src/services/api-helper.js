import axios from 'axios'

export const getApi = async () => {
  const response = await axios.get('https://ghibliapi.herokuapp.com/films')
  return response.data
}