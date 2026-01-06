import React from 'react'
import Section from '../common/section';
import Button from '../common/button';
import classNames from 'classnames';
import styles from '../../styles/components/patientory/card.module.scss';

export default function Card() {
  return (
    <Section
      id="card"
      className={
        classNames({
          [styles.card]: true
        })
      }
      containerClassName={
        classNames({
          [styles.container]: true
        })
      }
    >
      <div className="columnss">
        <div className="column is-two-thirdss">
          <h2 className="mb-5">Pharmacy Savings Card</h2>
          <h4 className="mb-5">Receive the Patientory Prescription Insurance Savings Card for discounts on qualified medication at participating pharmacies.</h4>
          <Button action="carepharmacy" title="Get card"/>
        </div>
        <div className="column"></div>
      </div>
    </Section>
  )
}
