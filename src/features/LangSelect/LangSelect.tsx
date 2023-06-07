import { FC, useState } from 'react'
import styles from './LangSelect.module.scss'
import clsx from 'clsx'

interface IProps {
  langData: string[]
}

export const LangSelect: FC<IProps> = ({ langData }) => {
  const [activeLang, setActiveLang] = useState<string>(langData[0])
  const [selectActive, setSelectActive] = useState<boolean>(false)

  return (
    <div className={styles.langSelect}>
      <div
        onClick={() =>
          selectActive ? setSelectActive(false) : setSelectActive(true)
        }
        className={clsx(styles.activeLang, 'cursor-scale')}
      >
        {activeLang}
      </div>
      <ul className={clsx(styles.select, selectActive && styles.active)}>
        {langData.map((lang) => (
          <li
            key={lang}
            onClick={() => {
              setSelectActive(false)
              setActiveLang(lang)
            }}
            className={clsx(
              styles.item,
              activeLang === lang && styles.active,
              'cursor-scale'
            )}
          >
            {lang}
          </li>
        ))}
      </ul>
    </div>
  )
}
