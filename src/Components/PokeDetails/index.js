import React, { memo, useEffect, useContext, useCallback } from 'react'

import { TYPE_COLORS } from 'Constants/typeColors'
import { POKELIST } from 'Constants/routes'
import { Context as TranslateContext } from 'Context/TranslateContext'
import ArrowBack from 'Assets/Icons/ArrowBack'
import useSinglePokemon from 'Hooks/useSinglePokemon'
import Loader from 'Components/Core/Loader'
import Container from 'Components/Core/Container'
import Button from 'Components/Core/Button'

import './styles.css'

export default memo(function PokeDetails ({ history, match: { params } }) {
  const goBack = useCallback(() =>
    history.push(POKELIST)
  , [history])

  const { loading, pokemon, error } = useSinglePokemon({
    idPokemon: params.id
  })
  const { lang: translate } = useContext(TranslateContext)

  useEffect(() => {
    if (error) {
      goBack()
    }
  }, [error, goBack])

  if (loading || error || !pokemon) {
    return (
      <div className="loading">
        <Loader />
      </div>
    )
  }

  return (
    <Container maxWidth="sm">
      <div className="poke-detail">
        <div className="container-img">
          <img src={pokemon.sprites.other.dream_world.front_default} />
        </div>
        <div className="info">
          <div className="types">
            <p>{translate.detailPokemon.type}</p>
            {pokemon.types.map(type => (
              <span
                className="type"
                key={type.slot}
                style={{ backgroundColor: TYPE_COLORS[type.type.name] }}
              >
                {type.type.name}
              </span>
            ))}
          </div>
          <div className="flex">
            <div>
              <p>{translate.detailPokemon.weight}</p>
              <p className="title">{pokemon.weight}</p>
            </div>
            <div className="alig-end">
              <p>{translate.detailPokemon.height}</p>
              <p className="title">{pokemon.height}</p>
            </div>
          </div>
          <hr />
          <div className="flex">
            <div>
              <p>{translate.detailPokemon.ability}</p>
              <p className="title">{pokemon.abilities[0].ability.name}</p>
            </div>
            <div className="alig-end">
              <p>{translate.detailPokemon.experience}</p>
              <p className="title">{pokemon.base_experience}</p>
            </div>
          </div>
        </div>
      </div>
      <Button center gutterBottom onClick={goBack} startIcon={<ArrowBack />}>
        {translate.detailPokemon.buttonBack}
      </Button>
    </Container>
  )
})
