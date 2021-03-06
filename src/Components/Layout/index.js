import React, { memo } from 'react'

import SchemeColorSwitcher from 'Components/SchemeColorSwitcher'
import I18nWidget from 'Components/I18nWidget'
import './styles.css'

export default memo(function Layout ({ children }) {
  return (
    <>
      <section className="header">
        <SchemeColorSwitcher />
        <img
          className="header-img"
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'
          }
        />
        <I18nWidget />
      </section>
      {children}
    </>
  )
})
