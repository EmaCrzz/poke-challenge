import React, { memo, useState, useContext } from 'react'

import enFlag from 'Assets/flags/flag-en.svg'
import esFlag from 'Assets/flags/flag-es.svg'

import { Context as TranslateContext } from 'Context/TranslateContext'
import styles from './styles.module.css'

const LOCALES = [
  {
    locale: 'es',
    name: 'Español',
    zone: 'españa',
    flag: esFlag
  },
  {
    locale: 'en',
    name: 'English',
    zone: 'england',
    flag: enFlag
  }
]

export default memo(function I18nWidget () {
  const { locale, changeLocale } = useContext(TranslateContext)
  const [display, setDisplay] = useState(false)
  const localeSelected = LOCALES?.find(val => val.locale === locale)
  const options = LOCALES?.filter(val => val.locale !== locale)

  const onClick = locale => {
    changeLocale(locale)
    setDisplay(false)
  }

  return (
    <>
      <div className={styles.i18nWidget}>
        <button
          aria-label="Selector de idioma"
          onClick={() => setDisplay(!display)}
          type="button"
        >
          <img
            alt={`Bandera de ${localeSelected.zone}`}
            src={localeSelected.flag}
          />
          <span>{name}</span>
        </button>
        {options?.length && display
          ? (
            <ul>
              {options.map(op => (
                <li key={op.locale}>
                  <a onClick={() => onClick(op.locale)}>{op.name}</a>
                </li>
              ))}
            </ul>
          )
          : null}
      </div>
    </>
  )
})
