import { useContext, useState, useEffect, useCallback } from 'react'

import { Context as PokeContext } from 'Context/PokeContext'

const BASE_URL = process.env.REACT_APP_POKEAPI_URL

function useSinglePokemon ({ idPokemon }) {
  const { allPokemons } = useContext(PokeContext)
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchPokemonData = useCallback(
    async url => {
      try {
        const resp = await fetch(url)
        const pokeData = await resp.json()
        setPokemon(pokeData)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setError(error)
        setLoading(false)
      }
    },
    []
  )

  useEffect(() => {
    if (allPokemons.length === 0) {
      fetchPokemonData(`${BASE_URL}pokemon/${idPokemon}/`)
    } else {
      const pokemon = allPokemons.find(pokemon => pokemon.id === Number(idPokemon))
      setPokemon(pokemon)
      setLoading(false)
    }
  }, [allPokemons, fetchPokemonData, idPokemon])

  return {
    pokemon,
    loading,
    error
  }
}

export default useSinglePokemon
