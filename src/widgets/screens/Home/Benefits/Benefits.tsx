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
            <div className="flex items-end" id="row-1">
              {benefitsData.map(
                (benefit, idx) =>
                  (idx + 1) % 2 !== 0 && (
                    <Benefit key={benefit} position={'top'} text={benefit} />
                  )
              )}
            </div>
            <div className={styles.line}></div>
            <div className="flex items-start" id="row-2">
              {benefitsData.map(
                (benefit, idx) =>
                  (idx + 1) % 2 === 0 && (
                    <Benefit key={benefit} position={'bottom'} text={benefit} />
                  )
              )}
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
