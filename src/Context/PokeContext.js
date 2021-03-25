import React, { createContext, useState } from 'react'

export const Context = createContext()
const INITIAL_PAGE = 0

const Provider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([])
  const [loadingNextPage, setLoadingNextPage] = useState(false)
  const [nextPage, setNextPage] = useState(null)
  const [page, setPage] = useState(INITIAL_PAGE)

  const value = {
    allPokemons,
    setAllPokemons,
    loadingNextPage,
    setLoadingNextPage,
    nextPage,
    setNextPage,
    page,
    setPage
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Context: Context.Consumer
}
