import { useEffect, useRef, useContext } from 'react'

import useStickyState from 'Hooks/useStickyState'

import styles from './styles.module.css'
import { Context as TranslateContext } from 'Context/TranslateContext'

const SCHEMES = {
  SYSTEM: 'system',
  DARK: 'dark-mode',
  LIGHT: 'light-mode'
}

export default function SchemeColorSwitcher () {
  const [scheme, setScheme] = useStickyState(SCHEMES.SYSTEM, 'schemeColor')
  const slider = useRef(null)
  const switcher = useRef(null)
  const { lang: translate } = useContext(TranslateContext)

  useEffect(() => {
    const html = document.querySelector('html')
    scheme === SCHEMES.SYSTEM
      ? html.removeAttribute('scheme')
      : html.setAttribute('scheme', scheme)
    const target = switcher.current
      .querySelector('[data-checked="true"]')
      .querySelector('input')
    slider.current.style =
      'transform: translateX(' + target.dataset.location + ')'
  }, [scheme])

  const handleChange = e => {
    e.preventDefault()
    const { target } = e
    setScheme(target.value)
    slider.current.style =
      'transform: translateX(' + target.dataset.location + ')'
  }

  return (
    <section className={styles.colorSwitch} ref={switcher}>
      <div className={styles.slider} ref={slider} />
      <label
        data-checked={scheme === SCHEMES.LIGHT}
        title={translate.colorSwitcher.lightTitleLabel}
      >
        <input
          data-location="0"
          name="switch"
          onChange={handleChange}
          type="radio"
          value={SCHEMES.LIGHT}
        />
        <span aria-label={translate.colorSwitcher.lightAriaLabel} role="img">
          🌞
        </span>
      </label>

      <label
        data-checked={scheme === SCHEMES.SYSTEM}
        title={translate.colorSwitcher.standardTitleLabel}
      >
        <input
          data-location="calc(100% - 2px)"
          name="switch"
          onChange={handleChange}
          type="radio"
          value={SCHEMES.SYSTEM}
        />
        <span aria-label={translate.colorSwitcher.standardAriaLabel} role="img">
          💻
        </span>
      </label>

      <label
        data-checked={scheme === SCHEMES.DARK}
        title={translate.colorSwitcher.darkTitleLabel}
      >
        <input
          data-location="calc(200% - 4px)"
          name="switch"
          onChange={handleChange}
          type="radio"
          value={SCHEMES.DARK}
        />
        <span aria-label={translate.colorSwitcher.darkAriaLabel} role="img">
          🌚
        </span>
      </label>
    </section>
  )
}
