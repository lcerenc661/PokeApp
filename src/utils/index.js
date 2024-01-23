import axios from 'axios'

const pokeURL = 'https://pokeapi.co/api/v2/pokemon/?limit=500'

export const customFetch = axios.create({
  baseURL: pokeURL
})

export const paginateArray = (arr, pageSize) => {
  const totalPages = Math.ceil(arr.length / pageSize)
  console.log(totalPages)
  let paginated = {}

  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * pageSize
    const endIndex = startIndex + pageSize

    const page = arr.slice(startIndex, endIndex)
    paginated[i + 1] = page
  }
  return [paginated, totalPages]
}

export const fetchIndvPokemons = async (pokemonsUrls) => {
  return await Promise.all(
    pokemonsUrls.map(async (pokemon) => {
      const response = await axios.get(pokemon.url)
      return response.data
    })
  )
   
}
