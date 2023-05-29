import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './TestimonialsSlider.module.scss'
import clsx from 'clsx'

interface IProps {
  data: any[]
  onSlide?: (id: number) => void
  activeId: number
  setActiveId: Dispatch<SetStateAction<number>>
}

export const TestimonialsSlider: FC<IProps> = ({
  data,
  onSlide,
  activeId,
  setActiveId,
}) => {
  

  

  return (
    
  )
}
