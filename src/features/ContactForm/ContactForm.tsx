import clsx from 'clsx'
import { Button } from '../../shared/Button/Button'
import { Input } from '../../shared/Input/Input'
import styles from './ContactForm.module.scss'
import { Checkbox } from '../../shared/Checkbox/Checkbox'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { FileInput } from '../../shared/FileInput/FileInput'

export const ContactForm = () => {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const [services, setServices] = useState<{
    [key: string]: boolean
  }>({
    branding: false,
    webDesign: false,
    development: false,
    video: false,
  })

  const [file, setFile] = useState<File>()

  const handleSelect = (key: string, state: boolean) => {
    const data: {
      [key: string]: boolean
    } = services

    data[key] = state

    setServices(data)
  }

  const handlerChange = (
    e: InputEvent,
    setState: Dispatch<SetStateAction<string>>
  ) => {
    const target = e.target as HTMLInputElement
    const value = target.value

    setState(value)
  }

  return (
    <form action="" className={styles.contactForm}>
      <h2>
        <span className="yellow">Tell us</span> more
      </h2>
      <div className={styles.checkboxRow}>
        <Checkbox
          onChange={handleSelect}
          dataKey={'branding'}
          label="Branding"
        />
        <Checkbox
          onChange={handleSelect}
          dataKey={'webDesign'}
          label="Web Design"
        />
        <Checkbox
          onChange={handleSelect}
          dataKey={'development'}
          label="Development"
        />
        <Checkbox onChange={handleSelect} dataKey={'video'} label="Video" />
      </div>
      <div className={styles.inputCol}>
        <div className={styles.inputRow}>
          <Input
            setValue={setName}
            value={name}
            onChange={handlerChange}
            type="text"
            placeholder="Name"
            required={true}
          />
          <Input
            setValue={setPhone}
            value={phone}
            onChange={handlerChange}
            type="number"
            placeholder="Phone"
            required={true}
          />
        </div>
        <div className={styles.inputRow}>
          <Input
            setValue={setEmail}
            value={email}
            onChange={handlerChange}
            type="email"
            placeholder="Email"
            required={true}
          />
        </div>
        <div className={styles.inputRow}>
          <Input
            setValue={setMessage}
            value={message}
            onChange={handlerChange}
            type="text"
            placeholder="Message"
            required={false}
          />
        </div>
      </div>
      <div
        className={clsx('flex items-center justify-between', styles.submitRow)}
      >
        <div className="reveal bottom" data-start="100%">
          <Button htmlType="submit" type="circle">
            Send
          </Button>
        </div>
        <div data-start="100%" className="reveal bottom">
          <FileInput setFileData={setFile} />
        </div>
      </div>
    </form>
  )
}
