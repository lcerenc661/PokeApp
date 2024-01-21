import axios from 'axios'

const pokeURL = 'https://pokeapi.co/api/v2/pokemon/'

export const customFetch = axios.create({
  baseURL: pokeURL
})



