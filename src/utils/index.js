import axios from 'axios'

// const pokeURL = 'https://pokeapi.co/api/v2/pokemon/?limit=494'
const pokeURL = 'https://pokeapi.co/api/v2/pokemon/?limit=1002'

export const customFetch = axios.create({
  baseURL: pokeURL
})

export const paginateArray = (arr, pageSize) => {
  const totalPages = Math.ceil(arr.length / pageSize)
  let paginated = {}

  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * pageSize
    const endIndex = startIndex + pageSize

    const page = arr.slice(startIndex, endIndex)
    paginated[i + 1] = page
  }
  return [paginated, totalPages]
}

export const fetchIndvPokemons = async pokemonsUrls => {
  return await Promise.all(
    pokemonsUrls.map(async pokemon => {
      const response = await axios.get(pokemon.url)
      return response.data
    })
  )
}

export const fetchEvolutionLine = async pokemons => {
  try {
    const pokemonsUrls = Object.values(pokemons).map(element => element.name)
    return await Promise.all(
      pokemonsUrls.map(async pokemon => {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        )
        return response.data
      })
    )
    
    
  } catch (error) {
    return 
  }
}

export const getSpeciesNames = (evolutionData, counter, evolutionLine) => {
  evolutionLine[counter] = evolutionData.species

  if (evolutionData.evolves_to.length > 0) {
    const nextEvolution = evolutionData.evolves_to[0]
    return getSpeciesNames(nextEvolution, counter + 1, evolutionLine)
  }
  return evolutionLine
}

export const getBaseStats = statsArr => {
  let stats = {}
  for (let i = 0; i < statsArr.length; i++) {
    const statsName = statsArr[i].stat.name
    const value = statsArr[i].base_stat
    stats[statsName] = value
  }
  return stats
}

export const getAbilities = abiArr => {
  let abilities = []
  for (let i = 0; i < abiArr.length; i++) {
    const abiName = abiArr[i].ability.name
    abilities.push(abiName)
  }
  return abilities
}

export const formatIdNumber = id => {
  if (id.length < 4) {
    let newId = '0' + id
    return formatIdNumber(newId)
  }
  return id
}

export const getColorType = type => {
  const typesColor = {
    normal: 'bg-yellow-500',
    fighting: 'bg-rose-700',
    flying: 'bg-blue-600',
    poison: 'bg-fuchsia-500',
    ground: 'bg-orange-500',
    rock: 'bg-yellow-700',
    bug: 'bg-yellow-300',
    ghost: 'bg-pink-950',
    steel: 'bg-stone-950',
    fire: 'bg-red-600',
    water: 'bg-sky-400',
    grass: 'bg-lime-600',
    electric: 'bg-stone-700',
    psychic: 'bg-pink-700',
    ice: 'bg-sky-500',
    dragon: 'bg-purple-500',
    dark: 'bg-rose-800',
    fairy: 'bg-pink-400',
    unknown: 'bg-zinc-600',
    shadow: 'bg-violet-900'
  }
  return typesColor[type]
}
