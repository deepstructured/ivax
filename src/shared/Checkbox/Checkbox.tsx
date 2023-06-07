import { FC, useEffect, useRef, useState } from 'react'
import styles from './Checkbox.module.scss'
import clsx from 'clsx'
import { useReveal } from '../../hooks/useReveal'

interface IProps {
  label: string
  onChange?: (key: string, state: boolean) => void
  dataKey?: string
}

export const Checkbox: FC<IProps> = ({ label, dataKey, onChange }) => {
  const [checked, setCheked] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (onChange && dataKey) {
      onChange(dataKey, checked)
    }
  }, [checked])

  useEffect(() => {
    if (ref.current) {
      useReveal(
        ref.current,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
        },
        false,
        ref.current.closest('form')
      )
    }
  }, [])

  return (
    <div ref={ref} className={clsx(styles.checkbox, 'reveal bottom')}>
      <div className={clsx(styles.input, 'cursor-scale')}>
        <input
          checked={checked}
          onChange={(e) => setCheked(e.target.checked)}
          type="checkbox"
          id={label}
          name={label}
        />
      </div>
      <label htmlFor={label}>{label}</label>
    </div>
  )
}
