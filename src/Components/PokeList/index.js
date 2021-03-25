import React, { memo, useContext } from 'react'

import usePokemons from 'Hooks/usePokemons'
import { Context as TranslateContext } from 'Context/TranslateContext'
import Container from 'Components/Core/Container'
import Loader from 'Components/Core/Loader'
import Button from 'Components/Core/Button'
import ScrollToTop from 'Components/ScrollToTop'
import PokeCard from 'Components/PokeCard'

import './styles.css'

export default memo(function PokeList () {
  const { setPage, allPokemons, loading, loadingNextPage } = usePokemons()
  const { lang: translate } = useContext(TranslateContext)

  const handleSigs = () => {
    setPage(prevPage => prevPage + 1)
  }

  if (loading) {
    return (
      <div className="loading">
        <Loader />
      </div>
    )
  }

  return (
    <Container maxWidth="md">
      <h1>{translate.listPokemon.title}</h1>
      <div className="list">
        {allPokemons.map(pokemon => (
          <PokeCard
            button
            hp={pokemon.stats[0].base_stat}
            id={pokemon.id}
            imageFront={pokemon.sprites.other.dream_world.front_default}
            key={pokemon.id}
            name={pokemon.name}
          />
        ))}
      </div>
      <ScrollToTop showButtonAt={250} />
      {!loadingNextPage &&
        <Button center gutterBottom onClick={handleSigs}>
          {translate.listPokemon.loadMore}
        </Button>}
    </Container>
  )
})
