import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react'
import styles from './FileInput.module.scss'
import clsx from 'clsx'

interface IProps {
  setFileData?: Dispatch<SetStateAction<File | undefined>>
}

export const FileInput: FC<IProps> = ({ setFileData }) => {
  const [file, setFile] = useState<File>()

  useEffect(() => {
    if (setFileData && file) {
      setFileData(file)
    }
  }, [file])

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className={clsx(styles.fileInput, 'cursor-scale')}>
      <input
        onChange={(e) => {
          handleFileChange(e)
        }}
        type="file"
      />
      <div className={styles.custom}>
        <img src="/images/icons/attach.svg" alt="" />
        <span>Attach file</span>
      </div>
      <small>{file ? 'File attached' : ''}</small>
    </div>
  )
}
