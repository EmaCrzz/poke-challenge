import React, { memo } from 'react'
import { useHistory } from 'react-router-dom'
import cx from 'clsx'

import './styles.css'

export default memo(function PokeCard ({ button, name, imageFront, id, hp }) {
  const history = useHistory()
  const rootClass = cx({
    card: true,
    'card-button': button
  })

  const showDetails = id => {
    history.push(`/poke/details/${id}`)
  }

  return (
    <div className={rootClass} onClick={() => showDetails(id)}>
      <div className="card-content">
        <img className="card-img" src={imageFront} />
      </div>
      <div className="card-footer">
        <p>{name}</p>
        <span>💚&nbsp;{hp}</span>
      </div>
    </div>
  )
})
