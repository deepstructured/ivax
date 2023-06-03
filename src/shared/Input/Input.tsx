import { Dispatch, FC, SetStateAction } from 'react'
import styles from './Input.module.scss'
import clsx from 'clsx'

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
  return (
    <input
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
