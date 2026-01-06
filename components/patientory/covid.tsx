import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/patientory/covid.module.scss';
import useCovidItems, { CovidItems } from '../../helpers/patientory/covid/useCovidItems';

export default function Covid() {
  const [renderItems] = useCovidItems();

  return (
    <Section
      id="pandemic"
      className={
        classNames({
          [styles.covid]: true
        })
      }
      containerClassName={styles.container}
    >
      <h2>Pandemic Response</h2>
      <h4>Tracking and Pandemic Reporting</h4>
      <div
        className={
          classNames({
            'columns': true,
            [styles.features]: true
          })
        }
      >
        <CovidItems>
          {(item) => (
            <React.Fragment>
              {
                <div
                  className={
                    classNames({
                      [styles.feature_item]: true,
                      'column': true
                    })
                  }
                >
                  <img src={item.src} alt={item.title}/>
                  <p>{item.title}</p>
                </div>
              }
            </React.Fragment>
          )}
        </CovidItems>
      </div>
    </Section>
  )
}
