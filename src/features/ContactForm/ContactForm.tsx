import clsx from 'clsx'
import { Button } from '../../shared/Button/Button'
import { Input } from '../../shared/Input/Input'
import styles from './ContactForm.module.scss'
import { Checkbox } from '../../shared/Checkbox/Checkbox'
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
  useEffect,
} from 'react'
import { FileInput } from '../../shared/FileInput/FileInput'
import { useReveal } from '../../hooks/useReveal'

const TG_BOT_API_KEY = import.meta.env.VITE_TG_BOT_API_KEY
const TG_CHAT_ID = import.meta.env.VITE_TG_CHAT_ID

const servicesWords = ['Branding', 'Web Design', 'Development', 'Video']

export const ContactForm = () => {
  const refForm = useRef<HTMLFormElement>(null)

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

  const renderMessage = () => {
    return `Name: ${name}%0APhone: ${phone}%0AE-Mail: ${email}%0AMessage: ${message}%0AServices - ${renderServicesToString()}`
  }

  const renderServicesToString = (): string => {
    let str = ''

    const selectedServices = Object.values(services).filter(
      (service) => service === true
    )

    Object.keys(services).map((key, idx) => {
      console.log(Object.values(services)[idx])
      if (Object.values(services)[idx] === true) {
        str =
          idx < selectedServices.length - 1
            ? str.concat(`${servicesWords[idx]}, `)
            : str.concat(`${servicesWords[idx]}`)
      }
    })

    return str
  }

  const sendForm = () => {
    fetch(
      `https://api.telegram.org/bot${TG_BOT_API_KEY}/sendMessage?chat_id=${TG_CHAT_ID}&parse_mode=html&text=${renderMessage()}&disable_web_page_preview=true`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to send message')
        } else {
          setName('')
          setEmail('')
          setMessage('')
          setPhone('')
          setServices({
            branding: false,
            webDesign: false,
            development: false,
            video: false,
          })
        }
      })
      .catch(() => {
        alert('Enter and select all data and answers')
      })
  }

  useEffect(() => {
    if (refForm.current) {
      useReveal(
        Array.from(refForm.current.querySelectorAll<HTMLElement>('.reveal')),
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.5,
        },
        false,
        refForm.current,
        true,
        'bottom 100%',
        'top 100%'
      )

      useReveal(
        Array.from(
          refForm.current.querySelectorAll<HTMLElement>(
            `.${styles.submitRow} > div`
          )
        ),
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
        },
        false,
        refForm.current,
        true,
        'bottom 80%',
        'start 90%'
      )

      useReveal(
        Array.from(refForm.current.querySelectorAll<HTMLElement>('h2 > span')),
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
        },
        false,
        refForm.current
      )
    }
  }, [])

  return (
    <form
      onSubmit={(ev) => {
        ev.preventDefault()

        if (
          name !== '' &&
          phone !== '' &&
          email.includes('@') &&
          message !== ''
        ) {
          sendForm()
        }
      }}
      ref={refForm}
      action=""
      className={styles.contactForm}
    >
      <h2>
        <span className="yellow reveal left">Tell us</span>{' '}
        <span className="reveal right">more</span>
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
        <div className="reveal bottom">
          <Button htmlType="submit" type="circle">
            Send
          </Button>
        </div>
        <div className="reveal bottom">
          <FileInput setFileData={setFile} />
        </div>
      </div>
      <div className={styles.body}>
        <ul className={styles.col}>
          <h3 className="reveal top">Communication</h3>
          <ul>
            <li className="reveal bottom">
              <a href="tel:+380634178440">+38 (063) 417 84 40</a>
            </li>
            <li className="yellow reveal bottom">
              <a href="mailto:ivax.studio@gmail.com">ivax.studio@gmail.com</a>
            </li>
          </ul>
        </ul>
        <ul className={styles.col}>
          <h3 className="reveal top">Address</h3>
          <li className="reveal bottom">
            Kyiv, Ukraine
            <br />
            st. Velyka Vasylkivska 23
          </li>
        </ul>
      </div>
    </form>
  )
}
