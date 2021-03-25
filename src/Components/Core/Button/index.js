import React from 'react'
import cx from 'clsx'

import './styles.css'

export default function Button ({
  children,
  endIcon,
  small,
  center,
  startIcon,
  gutterBottom,
  ...rest
}) {
  const rootClass = cx({
    'button-base': true,
    'button-center': center,
    'button-smal': small,
    'button-gutterBottom': gutterBottom
  })

  return (
    <button className={rootClass} {...rest}>
      <span className="button-base-label">
        {startIcon && <span className="button-startIcon">{startIcon}</span>}
        {children}
        {endIcon && <span className="button-endIcon">{endIcon}</span>}
      </span>
    </button>
  )
}
