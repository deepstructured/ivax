import { Dispatch, FC, SetStateAction, useRef, useEffect } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'
import { useReveal } from '../../hooks/useReveal'

interface IProps {
  placeholder: string
  type: string
  required: boolean
  value: string
  onChange?: Function
  setValue?: Dispatch<SetStateAction<string>>
}

export const Input: FC<IProps> = ({
  placeholder,
  type,
  required,
  onChange,
  value,
  setValue,
}) => {
  const ref = useRef<HTMLInputElement>(null)

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
    <input
      ref={ref}
      name={type}
      autoComplete={'on'}
      onChange={(e) => onChange && onChange(e, setValue)}
      value={value}
      className={clsx(styles.input, 'reveal bottom')}
      type={type}
      placeholder={required ? placeholder + '*' : placeholder}
      required={required}
    />
  )
}
