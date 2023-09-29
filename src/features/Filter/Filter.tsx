import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'
import styles from './Filter.module.scss'
import clsx from 'clsx'
import { useReveal } from '../../hooks/useReveal'
import { gsap } from 'gsap'

interface IProps {
  filteredData: any[]
  setFilteredData: Dispatch<SetStateAction<any[]>>
  optionsData: any[]
  filterKey: string
}

export const Filter: FC<IProps> = ({
  filteredData,
  setFilteredData,
  optionsData,
  filterKey,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const [activeOption, setActiveOption] = useState<number | string>('all')
  const [originalData, setOriginalData] = useState<any[]>(filteredData)

  const [mobileFilterActive, setMobileFilterActive] = useState<boolean>(false)

  const filterData = (slug: string, idx: number) => {
    const data = originalData

    console.log(slug, idx)

    setFilteredData(
      data.filter(
        (item) => item[filterKey].toLowerCase() === slug.toLowerCase()
      )
    )

    setActiveOption(idx)
  }

  useEffect(() => {
    if (ref.current) {
      const desktopFilterOptions = Array.from(
        ref.current.querySelectorAll<HTMLElement>(`.${styles.desktop} > li`)
      )

      desktopFilterOptions.map((option, idx) => {
        gsap.set(option, {
          opacity: 0,
          x: `-50%`,
          y: `25%`,
        })

        useReveal(
          option,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            delay: (idx + 1) * 0.15,
          },
          false,
          ref.current?.closest('section')
        )
      })
    }
  }, [])

  return (
    <div ref={ref} className={styles.filter}>
      <ul className={styles.desktop}>
        <li
          onClick={() => {
            setFilteredData(originalData)
            setActiveOption('all')
          }}
          className={activeOption === 'all' ? styles.active : ''}
        >
          All <sup>{originalData.length}</sup>
        </li>

        {/* {optionsData.map((option, idx) => (
          <li
            key={idx}
            onClick={() => filterData(option, idx)}
            className={activeOption === idx ? styles.active : ''}
          >
            {option + ' '}
            <sup>
              {
                originalData.filter(
                  (item) =>
                    item[filterKey].toLowerCase() === option.toLowerCase()
                ).length
              }
            </sup>
          </li>
        ))} */}
      </ul>
      <div className={clsx(mobileFilterActive && styles.active, styles.mobile)}>
        <div className={styles.head}>
          <ul>
            <li className={styles.active}>All{originalData.length}</li>
          </ul>
        </div>
        <ul className={styles.body}>
          {activeOption !== 'all' && (
            <li
              onClick={() => {
                setActiveOption('all')
                setFilteredData(originalData)
                setMobileFilterActive(false)
              }}
            >
              All
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
