import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/about/careers.module.scss';
import { CareersList } from '../../helpers/about/careers/useCareers';
import MoreButton from '../common/more.button';

export default function Careers() {
  return (
    <Section
      id="careers"
      className={
        classNames({
          [styles.careers]: true
        })
      }
      containerClassName={
        classNames({
          [styles.container]: true
        })
      }
    >
      <div
        className={
          classNames({
            "columns": true,
            [styles.title]: true
          })
        }
      >
        <div className="column">
          <h1>Careers</h1>
          {/*<h3>Currently, there are no opportunities available. </h3><h3>Please stay tuned for more updates.</h3>*/}
        </div>
        <div className="column">
          <h3>Please see a list of our currently available opportunities below.</h3>
        </div>
      </div>
      <div className="columns is-multiline">
        <CareersList>
          {(career) => (
            <div
              className={
                classNames({
                  "column is-half": true,
                  [styles.career]: true
                })
              }
            >
              <h3>{career.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: career.description }}/>
              <MoreButton title="Read more" action={`/career/${career.slug}`}/>
            </div>
          )}
        </CareersList>
      </div>
    </Section>
  )
}
