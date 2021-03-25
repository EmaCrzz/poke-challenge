import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const html = window.document.documentElement
  const localeStorage = localStorage.getItem('locale') || null
  const [locale, setLocale] = useState(localeStorage || html.lang)
  const [lang, setLang] = useState(require(`../../public/i18n/${locale}.json`))

  const changeLocale = locale => {
    localStorage.setItem('locale', locale)
    setLang(require(`../../public/i18n/${locale}.json`))
    setLocale(locale)
  }
  const value = {
    lang,
    locale,
    changeLocale
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export default {
  Provider,
  Context: Context.Consumer
}
