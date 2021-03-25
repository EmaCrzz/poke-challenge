import { useContext, useState, useEffect, useCallback } from 'react'

import { Context as PokeContext } from 'Context/PokeContext'

const BASE_URL = process.env.REACT_APP_POKEAPI_URL

function usePokemons () {
  const {
    allPokemons,
    setAllPokemons,
    loadingNextPage,
    setLoadingNextPage,
    nextPage,
    setNextPage,
    page,
    setPage
  } = useContext(PokeContext)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchPokemonData = useCallback(
    async pokemon => {
      const url = pokemon.url
      try {
        const resp = await fetch(url)
        const pokeData = await resp.json()
        setAllPokemons(prev => prev.concat(pokeData))
      } catch (error) {
        console.error(error)
        setError(error)
        setLoading(false)
      }
    },
    [setAllPokemons]
  )

  const fetchAllPokemons = useCallback(
    async url => {
      try {
        const resp = await fetch(url)
        const pokemons = await resp.json()
        setNextPage(pokemons.next)
        pokemons.results.forEach(function (pokemon) {
          fetchPokemonData(pokemon)
        })
        setLoading(false)
        setLoadingNextPage(false)
      } catch (error) {
        console.error(error)
        setError(error)
      }
    },
    [fetchPokemonData, setNextPage, setLoadingNextPage]
  )

  useEffect(() => {
    if (allPokemons.length === 0) {
      fetchAllPokemons(`${BASE_URL}pokemon?limit=5`)
    } else {
      setLoading(false)
    }
  }, [allPokemons.length, fetchAllPokemons, setAllPokemons])

  useEffect(() => {
    if (page === 0) return
    if (!nextPage) return

    setLoadingNextPage(true)
    fetchAllPokemons(nextPage)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return {
    error,
    loading,
    loadingNextPage,
    nextPage,
    allPokemons,
    setPage
  }
}

export default usePokemons
