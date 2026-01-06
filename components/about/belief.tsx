import React from 'react'
import Section from '../common/section'
import classNames from 'classnames';
import styles from '../../styles/components/about/belief.module.scss';

export default function Belief() {
  return (
    <Section
      className={
        classNames({
          [styles.belief]: true
        })
      }
    >
      <div className="columns">
        <div className="column">
          <h3>
            We believe better healthcare <br className="is-hidden-touch"/>starts with the people.
          </h3>
        </div>
        <div className="column">
          <p>
            Patientory is empowering people to take charge of their own health. We’re revolutionizing the way healthcare stakeholders and patients interact and gain access to information, cutting out all layers and processes that currently are stumbling blocks in care coordination.
          </p><br/>
          <p>Patientory empowers you with control of your health data, so you can maximize your health and earn personalized reward based $PTOY token payments.</p>
        </div>
      </div>
    </Section>
  )
}
