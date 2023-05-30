import { FC, useEffect, useState } from 'react'
import styles from './Checkbox.module.scss'

interface IProps {
  label: string
  onChange?: (key: string, state: boolean) => void
  dataKey?: string
}

export const Checkbox: FC<IProps> = ({ label, dataKey, onChange }) => {
  const [checked, setCheked] = useState<boolean>(false)

  useEffect(() => {
    if (onChange && dataKey) {
      onChange(dataKey, checked)
    }
  }, [checked])

  return (
    <div className={styles.checkbox}>
      <div className={styles.input}>
        <input
          checked={checked}
          onChange={(e) => setCheked(e.target.checked)}
          type="checkbox"
          name=""
          id=""
        />
      </div>
      <label>{label}</label>
    </div>
  )
}
