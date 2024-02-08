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

export const getSpeciesNames = (evolutionData, counter, evolutionLine)=>{

  evolutionLine[counter] =  evolutionData.species
  
  if (evolutionData.evolves_to.length>0){
    const nextEvolution = evolutionData.evolves_to[0];
    return  getSpeciesNames(nextEvolution, counter + 1, evolutionLine);
  }
  return evolutionLine
}


export const getBaseStats = (statsArr) =>{
  let stats = {}
  for (let i = 0; i < statsArr.length; i++){
    const statsName = statsArr[i].stat.name
    const value = statsArr[i].base_stat
    stats[statsName] = value
  }
  return stats
}

export const getAbilities = (abiArr) =>{
  let abilities = []
  for (let i = 0; i < abiArr.length; i++){
    const abiName = abiArr[i].ability.name
    abilities.push(abiName)
  }
  return abilities
}