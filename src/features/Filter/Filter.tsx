import { Dispatch, FC, SetStateAction, useState } from 'react'
import styles from './Filter.module.scss'

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
  const [activeOption, setActiveOption] = useState<number>(0)
  const [originalData, setOriginalData] = useState<any[]>(filteredData)

  const filterData = (slug: string, idx: number) => {
    const data = originalData

    setFilteredData(
      data.filter(
        (item) => item[filterKey].toLowerCase() === slug.toLowerCase()
      )
    )

    setActiveOption(idx)
  }

  return (
    <div className={styles.filter}>
      <ul className={styles.desktop}>
        <li
          onClick={() => {
            setFilteredData(originalData)
            setActiveOption(0)
          }}
          className={activeOption === 0 ? styles.active : ''}
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
    </div>
  )
}
