import clsx from 'clsx'
import styles from './Benefits.module.scss'
import { Button } from '../../../../shared/Button/Button'
import { benefitsData } from './data'
import { Benefit } from '../../../../entities/Benefit/Benefit'
import { useAnchor } from '../../../../hooks/useAnchor'

export const Benefits = () => {
  return (
    <section id="benefits" className={clsx(styles.benefits, 'gray')}>
      <div className="container">
        <div className={styles.wrapper}>
          <h2>
            We promise <span className="yellow">six things</span>
          </h2>
          <div className={styles.benefitsRow}>
            <div id="row-1" className="flex items-center justify-start">
              {benefitsData.slice(0, 3).map((b) => (
                <Benefit key={b} position="top" text={b} />
              ))}
            </div>
            <div className={styles.line}></div>
            <div id="row-2" className="flex items-center justify-end">
              {benefitsData.slice(3).map((b) => (
                <Benefit key={b} position="bottom" text={b} />
              ))}
            </div>
          </div>
          <Button onClick={() => useAnchor('#contact')} type="circle">
            Talk to us
          </Button>
        </div>
      </div>
    </section>
  )
}
