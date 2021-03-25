import React from 'react'

import './index.css'

const defaultMaxWidthMapping = {
  lg: 'maxWidthLg',
  md: 'maxWidthMd',
  sm: 'maxWidthSm',
  xl: 'maxWidthXl',
  xs: 'maxWidthXs'
}

export default function Container ({ children, maxWidth = 'md', align }) {
  const maxWidthClass = `container-${defaultMaxWidthMapping[maxWidth]}`

  const classname = `container-root ${maxWidthClass}`

  return (
    <div className={classname}>
      {children}
    </div>
  )
}
