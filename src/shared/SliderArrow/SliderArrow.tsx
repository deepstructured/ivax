import { FC, useRef, useEffect } from 'react'
import styles from './SliderArrow.module.scss'
import clsx from 'clsx'
import { useReveal } from '../../hooks/useReveal'

interface IProps {
  direction: 'left' | 'right'
  onClick?: () => void
}

export const SliderArrow: FC<IProps> = ({ direction, onClick }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      useReveal(
        ref.current,
        {
          opacity: 1,
          x: 0,
          duration: 1.25,
        },
        {
          opacity: 0,
          x: direction === 'left' ? `-25%` : `25%`,
          duration: 1,
        },
        ref.current.closest('section')
      )
    }
  }, [])

  return (
    <div
      ref={ref}
      data-start="100%"
      onClick={() => onClick && onClick()}
      className={clsx(
        styles.sliderArrow,
        direction === 'left' ? 'reveal left' : 'reveal right'
      )}
    >
      {direction === 'left' && (
        <svg
          width="24"
          height="10"
          viewBox="0 0 24 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.553859 4.51076L23.4462 4.51076C23.7185 4.51076 23.9385 4.73076 23.9385 5.00307C23.9385 5.27537 23.7185 5.49537 23.4462 5.49537L1.74309 5.49537L4.73078 8.48307C4.92309 8.67537 4.92309 8.98768 4.73078 9.17999C4.53848 9.3723 4.22617 9.3723 4.03386 9.17999L0.204629 5.35076C0.0630909 5.20922 0.021552 4.99845 0.0984751 4.81384C0.175398 4.63076 0.355398 4.51076 0.553859 4.51076Z"
            fill="#656565"
          />
          <path
            d="M4.38698 0.676478C4.51314 0.676478 4.63929 0.724171 4.73468 0.821094C4.92698 1.0134 4.92698 1.32571 4.73468 1.51802L0.900828 5.35186C0.70852 5.54417 0.396214 5.54417 0.203906 5.35186C0.0115982 5.15956 0.0115982 4.84725 0.203906 4.65494L4.03775 0.821094C4.13467 0.724171 4.26083 0.676478 4.38698 0.676478Z"
            fill="#656565"
          />
        </svg>
      )}
      {direction === 'right' && (
        <svg
          width="24"
          height="9"
          viewBox="0 0 24 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.3846 4.81346L0.492308 4.81346C0.22 4.81346 0 4.59346 0 4.32115C0 4.04885 0.22 3.82885 0.492308 3.82885L22.1954 3.82885L19.2077 0.841154C19.0154 0.648846 19.0154 0.336538 19.2077 0.144231C19.4 -0.0480769 19.7123 -0.0480769 19.9046 0.144231L23.7338 3.97346C23.8754 4.115 23.9169 4.32577 23.84 4.51038C23.7631 4.69346 23.5831 4.81346 23.3846 4.81346Z"
            fill="#656565"
          />
          <path
            d="M19.5515 8.64774C19.4253 8.64774 19.2992 8.60005 19.2038 8.50313C19.0115 8.31082 19.0115 7.99851 19.2038 7.8062L23.0376 3.97236C23.23 3.78005 23.5423 3.78005 23.7346 3.97236C23.9269 4.16466 23.9269 4.47697 23.7346 4.66928L19.9007 8.50313C19.8038 8.60005 19.6776 8.64774 19.5515 8.64774Z"
            fill="#656565"
          />
        </svg>
      )}
    </div>
  )
}
