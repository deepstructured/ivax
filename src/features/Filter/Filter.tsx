import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './Filter.module.scss'
import clsx from 'clsx'

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

    // setActiveOption(idx)
  }

  return (
    <div className={styles.filter}>
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

        {optionsData.map((option, idx) => (
          <li
            key={idx}
            onClick={() => filterData(option, idx + 1)}
            className={activeOption === idx + 1 ? styles.active : ''}
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
        ))}
      </ul>
      <div className={clsx(mobileFilterActive && styles.active, styles.mobile)}>
        <div
          onClick={() =>
            mobileFilterActive
              ? setMobileFilterActive(false)
              : setMobileFilterActive(true)
          }
          className={styles.head}
        >
          <ul>
            <li className={styles.active}>
              {typeof activeOption !== 'string'
                ? `${optionsData[activeOption]} ${
                    originalData.filter(
                      (item) =>
                        item[filterKey].toLowerCase() ===
                        optionsData[activeOption].toLowerCase()
                    ).length
                  }`
                : `All ${originalData.length}`}
            </li>
          </ul>
          <img
            className={styles.dropdownArrow}
            src="/images/icons/dropdown-arrow.svg"
            alt=""
          />
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
          {optionsData.map((option, idx) => (
            <li
              onClick={() => {
                filterData(option, idx)
                setMobileFilterActive(false)
              }}
              key={option}
              className={
                typeof activeOption !== 'string'
                  ? optionsData[activeOption] === option
                    ? styles.active
                    : ''
                  : ''
              }
            >
              {option}{' '}
              {
                originalData.filter(
                  (item) =>
                    item[filterKey].toLowerCase() === option.toLowerCase()
                ).length
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
