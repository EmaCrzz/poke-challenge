import ButtonScrollTop from 'Assets/Icons/ButtonScrollTop'
import useIntersectionObserver from 'Hooks/useIntersectionObserver'
import { useRef } from 'react'

export default function ScrollToTop ({ showButtonAt }) {
  const chivatoRef = useRef()
  const [isIntersecting] = useIntersectionObserver({ elementRef: chivatoRef })

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div
        ref={chivatoRef}
        style={{
          opacity: 0,
          height: 1,
          left: 1,
          position: 'absolute',
          top: `${showButtonAt}px`,
          width: 1
        }}
      />
      <ButtonScrollTop
        fill="#2c7cdc"
        height={45}
        onClick={handleClick}
        show={!isIntersecting}
        width={45}
      />
    </>
  )
}
