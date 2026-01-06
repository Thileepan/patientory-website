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
      <h1>
        Culture At Patientory
      </h1>
      <div className="columns">
        <div className="column">
          <h4>Mission</h4>
          <h5>
            To empower people with actionable data-driven insights for improved health outcomes and well-being. 
          </h5>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <h4>Vision</h4>
          <p>Build a healthier future for all by becoming the home of patient data.</p>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <h4>Key Beliefs </h4>
          <p>Impacting population health starts with impacting one person at a time.</p>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <h4>Values</h4>
          <p>
            <ul>
              <li>1. Empowerment</li>
              <li>2. Clarity</li>
              <li>3. Security</li>
              <li>4. Integrity</li>
            </ul>
          </p>
        </div>
      </div>
    </Section>
  )
}
